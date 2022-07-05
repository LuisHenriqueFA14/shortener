-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_redirections" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "origin" TEXT NOT NULL,
    "short" TEXT NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_redirections" ("id", "origin", "short") SELECT "id", "origin", "short" FROM "redirections";
DROP TABLE "redirections";
ALTER TABLE "new_redirections" RENAME TO "redirections";
CREATE UNIQUE INDEX "redirections_origin_key" ON "redirections"("origin");
CREATE UNIQUE INDEX "redirections_short_key" ON "redirections"("short");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
