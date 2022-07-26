
-- -----------------------------------------------------
-- Schema vita
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS "vita" ;

-- -----------------------------------------------------
-- Schema vita
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS "vita";
-- USE "vita" ;

-- -----------------------------------------------------
-- Table "vita"."user"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "vita"."user" ;

CREATE TABLE IF NOT EXISTS "vita"."user" (
  "id" SERIAL NOT NULL ,
  "display_name" VARCHAR(45) NULL,
  "email" VARCHAR(1024) NULL,
  "password" VARCHAR(1024) NULL,
  PRIMARY KEY ("id"))
;

CREATE UNIQUE INDEX "id_UNIQUE_user" ON "vita"."user" ("id" ASC) ;


-- -----------------------------------------------------
-- Table "vita"."region"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "vita"."region" ;

CREATE TABLE IF NOT EXISTS "vita"."region" (
  "id" INT NOT NULL,
  "name" VARCHAR(45) NULL,
  PRIMARY KEY ("id"))
;


-- -----------------------------------------------------
-- Table "vita"."activity"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "vita"."activity" ;

CREATE TABLE IF NOT EXISTS "vita"."activity" (
  "id" SERIAL NOT NULL ,
  "title" VARCHAR(255) NULL,
  "description" TEXT NULL,
  "image_url" VARCHAR(1024) NULL,
  "lat" DECIMAL NULL,
  "lng" DECIMAL NULL,
  "region_id" INT NOT NULL,
  PRIMARY KEY ("id"),
  CONSTRAINT "fk_activity_region1"
    FOREIGN KEY ("region_id")
    REFERENCES "vita"."region" ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
;

CREATE UNIQUE INDEX "id_UNIQUE_activity" ON "vita"."activity" ("id" ASC);

CREATE INDEX "fk_activity_region1_idx" ON "vita"."activity" ("region_id" ASC);


-- -----------------------------------------------------
-- Table "vita"."plan"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "vita"."plan" ;

CREATE TABLE IF NOT EXISTS "vita"."plan" (
  "id" INT NOT NULL,
  "name" VARCHAR(45) NULL,
  "owner_id" INT NOT NULL,
  PRIMARY KEY ("id"),
  CONSTRAINT "fk_plan_user1"
    FOREIGN KEY ("owner_id")
    REFERENCES "vita"."user" ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
;

CREATE INDEX "fk_plan_user1_idx" ON "vita"."plan" ("owner_id" ASC);


-- -----------------------------------------------------
-- Table "vita"."event"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "vita"."event" ;

CREATE TABLE IF NOT EXISTS "vita"."event" (
  "id" SERIAL NOT NULL ,
  "name" VARCHAR(45) NULL,
  "when" TIMESTAMP NULL,
  "activity_id" INT NOT NULL,
  "plan_id" INT NOT NULL,
  PRIMARY KEY ("id", "plan_id"),
  CONSTRAINT "fk_event_activity"
    FOREIGN KEY ("activity_id")
    REFERENCES "vita"."activity" ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT "fk_event_plan1"
    FOREIGN KEY ("plan_id")
    REFERENCES "vita"."plan" ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
;

CREATE UNIQUE INDEX "id_UNIQUE_event" ON "vita"."event" ("id" ASC);

CREATE INDEX "fk_event_activity_idx" ON "vita"."event" ("activity_id" ASC);

CREATE INDEX "fk_event_plan1_idx" ON "vita"."event" ("plan_id" ASC);


-- -----------------------------------------------------
-- Table "vita"."user_event_participant"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "vita"."user_event_participant" ;

CREATE TABLE IF NOT EXISTS "vita"."user_event_participant" (
  "user_id" INT NOT NULL,
  "event_id" INT NOT NULL,
  "id" INT NOT NULL,
  PRIMARY KEY ("event_id", "id"),
  CONSTRAINT "fk_participant_user1"
    FOREIGN KEY ("user_id")
    REFERENCES "vita"."user" ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT "fk_participant_event1"
    FOREIGN KEY ("event_id")
    REFERENCES "vita"."event" ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
;

CREATE INDEX "fk_participant_user1_idx" ON "vita"."user_event_participant" ("user_id" ASC);

CREATE UNIQUE INDEX "id_UNIQUE_ep" ON "vita"."user_event_participant" ("id" ASC);


-- -----------------------------------------------------
-- Table "vita"."collection"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "vita"."collection" ;

CREATE TABLE IF NOT EXISTS "vita"."collection" (
  "id" SERIAL NOT NULL ,
  "name" VARCHAR(45) NULL,
  "owner_id" INT NOT NULL,
  PRIMARY KEY ("id"),
  CONSTRAINT "fk_collection_user1"
    FOREIGN KEY ("owner_id")
    REFERENCES "vita"."user" ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
;

CREATE UNIQUE INDEX "id_UNIQUE_collection" ON "vita"."collection" ("id" ASC);

CREATE INDEX "fk_collection_user1_idx" ON "vita"."collection" ("owner_id" ASC);


-- -----------------------------------------------------
-- Table "vita"."user_collection_share"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "vita"."user_collection_share" ;

CREATE TABLE IF NOT EXISTS "vita"."user_collection_share" (
  "collection_id" INT NOT NULL,
  "user_id" INT NOT NULL,
  CONSTRAINT "fk_user_collection_share_collection1"
    FOREIGN KEY ("collection_id")
    REFERENCES "vita"."collection" ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT "fk_user_collection_share_user1"
    FOREIGN KEY ("user_id")
    REFERENCES "vita"."user" ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
;

CREATE INDEX "fk_user_collection_share_collection1_idx" ON "vita"."user_collection_share" ("collection_id" ASC);

CREATE INDEX "fk_user_collection_share_user1_idx" ON "vita"."user_collection_share" ("user_id" ASC);


-- -----------------------------------------------------
-- Table "vita"."user_plan_share"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "vita"."user_plan_share" ;

CREATE TABLE IF NOT EXISTS "vita"."user_plan_share" (
  "user_id" INT NOT NULL,
  "plan_id" INT NOT NULL,
  CONSTRAINT "fk_user_plan_share_user1"
    FOREIGN KEY ("user_id")
    REFERENCES "vita"."user" ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT "fk_user_plan_share_plan1"
    FOREIGN KEY ("plan_id")
    REFERENCES "vita"."plan" ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
;

CREATE INDEX "fk_user_plan_share_user1_idx" ON "vita"."user_plan_share" ("user_id" ASC);

CREATE INDEX "fk_user_plan_share_plan1_idx" ON "vita"."user_plan_share" ("plan_id" ASC);

