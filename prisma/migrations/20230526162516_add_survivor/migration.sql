-- CreateTable
CREATE TABLE "Survivor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "infected" BOOLEAN NOT NULL DEFAULT false,
    "location" INTEGER[],

    CONSTRAINT "Survivor_pkey" PRIMARY KEY ("id")
);
