const express = require("express");

const survivorsRoutes = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// C
survivorsRoutes.post('/survivors', async (req, res) => {
    const { name, age, location } = req.body;
    const survivor = await prisma.survivor.create({
      data: {
        name,
        age,
        location
      }
    })

    return res.status(201).json(survivor);
})

module.exports = survivorsRoutes;

// R
survivorsRoutes.get('/survivors', async (req, res) => {
  const survivors = await prisma.survivor.findMany()
    return res.status(200).json(survivors)
})

survivorsRoutes.get('/survivorsHealthy', async (req, res) => {
  const survivors = await prisma.survivor.findMany({
    where: { infected: false }
  })

  return res.status(200).json(survivors)
})

survivorsRoutes.get('/survivorsNonHealthy', async (req, res) => {
  const survivors = await prisma.survivor.findMany({
    where: { infected: true }
  })

  return res.status(200).json(survivors)
})


// U
// D



// survivorsRoutes.put('/cursos/:index', (req, res) => {
//     const { index } = req.params;
//     const { name } = req.body;

//     cursos[index] = name;

//     return res.json(cursos);
// })

// survivorsRoutes.put('/cursos/:index', (req, res) => {
//     const { index } = req.params;
    
//     cursos.splice(index, 1);

//     return res.json({message: 'Curso deletado'})

// })