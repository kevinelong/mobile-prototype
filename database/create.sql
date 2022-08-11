-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema vita
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema vita
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `vita` ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`action`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`action` (
                                               `idactions` INT NOT NULL AUTO_INCREMENT,
                                               `name` VARCHAR(45) NULL DEFAULT '',
    PRIMARY KEY (`idactions`),
    UNIQUE INDEX `idactions_UNIQUE` (`idactions` ASC) VISIBLE)
    ENGINE = InnoDB;

USE `vita` ;

-- -----------------------------------------------------
-- Table `vita`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vita`.`user` (
                                             `id` BIGINT NOT NULL,
                                             `display_name` VARCHAR(45) NULL DEFAULT NULL,
    `email` VARCHAR(1024) NULL DEFAULT NULL,
    `password` VARCHAR(1024) NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `id_UNIQUE_user` (`id` ASC) VISIBLE);


-- -----------------------------------------------------
-- Table `vita`.`region`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vita`.`region` (
                                               `id` INT NOT NULL,
                                               `name` VARCHAR(45) NULL DEFAULT NULL,
    PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `vita`.`kind`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vita`.`kind` (
                                             `idkind` INT NOT NULL,
                                             `name` VARCHAR(45) NULL DEFAULT 'explore',
    PRIMARY KEY (`idkind`))
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `vita`.`activity`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vita`.`activity` (
                                                 `id` BIGINT NOT NULL AUTO_INCREMENT,
                                                 `image_url` VARCHAR(1024) NOT NULL DEFAULT 'images/photos/cannon-beach.jpg',
    `title` VARCHAR(255) NOT NULL DEFAULT '',
    `subtitle` VARCHAR(45) NOT NULL DEFAULT '',
    `content` VARCHAR(255) NOT NULL DEFAULT '',
    `booking_index` INT NOT NULL DEFAULT -1,
    `match_percent` INT NOT NULL DEFAULT 100,
    `lat` DOUBLE NOT NULL DEFAULT 0,
    `lng` DOUBLE NOT NULL DEFAULT 0,
    `region_id` INT NULL,
    `activity_id` BIGINT NULL,
    `kind_idkind` INT NULL,
    `description` VARCHAR(1024) NOT NULL DEFAULT '',
    PRIMARY KEY (`id`),
    UNIQUE INDEX `id_UNIQUE_activity` (`id` ASC) VISIBLE,
    INDEX `fk_activity_region1_idx` (`region_id` ASC) VISIBLE,
    INDEX `fk_activity_region1` (`region_id` ASC) VISIBLE,
    INDEX `fk_activity_kind1_idx` (`kind_idkind` ASC) VISIBLE,
    CONSTRAINT `fk_activity_region1`
    FOREIGN KEY (`region_id`)
    REFERENCES `vita`.`region` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_activity_kind1`
    FOREIGN KEY (`kind_idkind`)
    REFERENCES `vita`.`kind` (`idkind`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `vita`.`plan`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vita`.`plan` (
                                             `id` BIGINT NOT NULL,
                                             `name` VARCHAR(45) NULL DEFAULT NULL,
    `owner_id` BIGINT NOT NULL,
    `timestamp` INT NULL DEFAULT 0,
    PRIMARY KEY (`id`),
    INDEX `fk_plan_user1_idx` (`owner_id` ASC) VISIBLE,
    INDEX `fk_plan_user1` (`owner_id` ASC) VISIBLE,
    CONSTRAINT `fk_plan_user1`
    FOREIGN KEY (`owner_id`)
    REFERENCES `vita`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `vita`.`event`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vita`.`event` (
                                              `id` BIGINT NOT NULL,
                                              `name` VARCHAR(45) NULL DEFAULT NULL,
    `when` TIMESTAMP NULL DEFAULT NULL,
    `activity_id` BIGINT NOT NULL,
    `plan_id` BIGINT NOT NULL,
    PRIMARY KEY (`id`, `plan_id`),
    UNIQUE INDEX `id_UNIQUE_event` (`id` ASC) VISIBLE,
    INDEX `fk_event_activity_idx` (`activity_id` ASC) VISIBLE,
    INDEX `fk_event_plan1_idx` (`plan_id` ASC) VISIBLE,
    INDEX `fk_event_activity` (`activity_id` ASC) VISIBLE,
    INDEX `fk_event_plan1` (`plan_id` ASC) VISIBLE,
    CONSTRAINT `fk_event_activity`
    FOREIGN KEY (`activity_id`)
    REFERENCES `vita`.`activity` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_event_plan1`
    FOREIGN KEY (`plan_id`)
    REFERENCES `vita`.`plan` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `vita`.`user_event_participant`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vita`.`user_event_participant` (
                                                               `user_id` BIGINT NOT NULL,
                                                               `event_id` BIGINT NOT NULL,
                                                               `id` BIGINT NOT NULL,
                                                               PRIMARY KEY (`event_id`, `id`),
    INDEX `fk_participant_user1_idx` (`user_id` ASC) VISIBLE,
    UNIQUE INDEX `id_UNIQUE_ep` (`id` ASC) VISIBLE,
    INDEX `fk_participant_user1` (`user_id` ASC) VISIBLE,
    CONSTRAINT `fk_participant_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `vita`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_participant_event1`
    FOREIGN KEY (`event_id`)
    REFERENCES `vita`.`event` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `vita`.`collection`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vita`.`collection` (
                                                   `id` BIGINT NOT NULL,
                                                   `name` VARCHAR(45) NULL,
    `owner_id` BIGINT NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `id_UNIQUE_collection` (`id` ASC) VISIBLE,
    INDEX `fk_collection_user1_idx` (`owner_id` ASC) VISIBLE,
    INDEX `fk_collection_user1` (`owner_id` ASC) VISIBLE,
    CONSTRAINT `fk_collection_user1`
    FOREIGN KEY (`owner_id`)
    REFERENCES `vita`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `vita`.`user_collection_share`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vita`.`user_collection_share` (
                                                              `collection_id` BIGINT NOT NULL,
                                                              `user_id` BIGINT NOT NULL,
                                                              INDEX `fk_user_collection_share_collection1_idx` (`collection_id` ASC) VISIBLE,
    INDEX `fk_user_collection_share_user1_idx` (`user_id` ASC) VISIBLE,
    INDEX `fk_user_collection_share_collection1` (`collection_id` ASC) VISIBLE,
    INDEX `fk_user_collection_share_user1` (`user_id` ASC) VISIBLE,
    CONSTRAINT `fk_user_collection_share_collection1`
    FOREIGN KEY (`collection_id`)
    REFERENCES `vita`.`collection` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_user_collection_share_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `vita`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `vita`.`user_plan_share`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vita`.`user_plan_share` (
                                                        `user_id` BIGINT NOT NULL,
                                                        `plan_id` BIGINT NOT NULL,
                                                        INDEX `fk_user_plan_share_user1_idx` (`user_id` ASC) VISIBLE,
    INDEX `fk_user_plan_share_plan1_idx` (`plan_id` ASC) VISIBLE,
    INDEX `fk_user_plan_share_user1` (`user_id` ASC) VISIBLE,
    INDEX `fk_user_plan_share_plan1` (`plan_id` ASC) VISIBLE,
    CONSTRAINT `fk_user_plan_share_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `vita`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_user_plan_share_plan1`
    FOREIGN KEY (`plan_id`)
    REFERENCES `vita`.`plan` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `vita`.`tag`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vita`.`tag` (
                                            `idtags` INT NOT NULL AUTO_INCREMENT,
                                            `name` VARCHAR(45) NULL DEFAULT NULL,
    PRIMARY KEY (`idtags`),
    UNIQUE INDEX `idtags_UNIQUE` (`idtags` ASC) VISIBLE)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `vita`.`activity_has_tag`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vita`.`activity_has_tag` (
                                                         `activity_id` BIGINT NOT NULL,
                                                         `tags_idtags` INT NOT NULL,
                                                         PRIMARY KEY (`activity_id`, `tags_idtags`),
    INDEX `fk_activity_has_tags_tags1_idx` (`tags_idtags` ASC) VISIBLE,
    INDEX `fk_activity_has_tags_activity1_idx` (`activity_id` ASC) VISIBLE,
    CONSTRAINT `fk_activity_has_tags_activity1`
    FOREIGN KEY (`activity_id`)
    REFERENCES `vita`.`activity` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_activity_has_tags_tags1`
    FOREIGN KEY (`tags_idtags`)
    REFERENCES `vita`.`tag` (`idtags`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `vita`.`group`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vita`.`group` (
                                              `idtable1` BIGINT NOT NULL,
                                              `title` VARCHAR(45) NULL DEFAULT NULL,
    `group_name` VARCHAR(45) NULL DEFAULT NULL,
    PRIMARY KEY (`idtable1`))
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `vita`.`group_has_user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vita`.`group_has_user` (
                                                       `groups_idtable1` BIGINT NOT NULL,
                                                       `user_id` BIGINT NOT NULL,
                                                       PRIMARY KEY (`groups_idtable1`, `user_id`),
    INDEX `fk_groups_has_user_user1_idx` (`user_id` ASC) VISIBLE,
    INDEX `fk_groups_has_user_groups1_idx` (`groups_idtable1` ASC) VISIBLE,
    CONSTRAINT `fk_groups_has_user_groups1`
    FOREIGN KEY (`groups_idtable1`)
    REFERENCES `vita`.`group` (`idtable1`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_groups_has_user_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `vita`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `vita`.`groups_has_activity`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vita`.`groups_has_activity` (
                                                            `groups_idtable1` BIGINT NOT NULL,
                                                            `activity_id` BIGINT NOT NULL,
                                                            PRIMARY KEY (`groups_idtable1`, `activity_id`),
    INDEX `fk_groups_has_activity_activity1_idx` (`activity_id` ASC) VISIBLE,
    INDEX `fk_groups_has_activity_groups1_idx` (`groups_idtable1` ASC) VISIBLE,
    CONSTRAINT `fk_groups_has_activity_groups1`
    FOREIGN KEY (`groups_idtable1`)
    REFERENCES `vita`.`group` (`idtable1`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_groups_has_activity_activity1`
    FOREIGN KEY (`activity_id`)
    REFERENCES `vita`.`activity` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `vita`.`activity_has_action`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vita`.`activity_has_action` (
                                                            `activity_id` BIGINT NOT NULL,
                                                            `actions_idactions` INT NOT NULL,
                                                            PRIMARY KEY (`activity_id`, `actions_idactions`),
    INDEX `fk_activity_has_actions_actions1_idx` (`actions_idactions` ASC) VISIBLE,
    INDEX `fk_activity_has_actions_activity1_idx` (`activity_id` ASC) VISIBLE,
    CONSTRAINT `fk_activity_has_actions_activity1`
    FOREIGN KEY (`activity_id`)
    REFERENCES `vita`.`activity` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_activity_has_actions_actions1`
    FOREIGN KEY (`actions_idactions`)
    REFERENCES `mydb`.`action` (`idactions`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
