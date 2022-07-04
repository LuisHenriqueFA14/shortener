-- CreateTable
CREATE TABLE "redirections" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "origin" TEXT NOT NULL,
    "short" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "redirections_origin_key" ON "redirections"("origin");

-- CreateIndex
CREATE UNIQUE INDEX "redirections_short_key" ON "redirections"("short");
