import express from 'express';
import { Student } from '../models/Student.js';

const router = express.Router();

// Obtener todos los estudiantes
router.get('/', async (req, res) => {
    try {
        const students = await Student.findAll();
        res.status(200).json(students);
    } catch (error) {
        console.error({ error: 'Error al obtener estudiantes', detail: error.original });
        res.status(500).json({ error: 'Error al obtener estudiantes' });
    }
});

// Obtener un estudiante por ID
router.get('/:id', async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (!student) return res.status(404).json({ error: 'Estudiante no encontrado' });
        res.status(200).json(student);
    } catch (error) {
        console.error({ error: 'Error al obtener el estudiante', detail: error.original });
        res.status(500).json({ error: 'Error al obtener el estudiante' });
    }
});

// Crear un nuevo estudiante
router.post('/', async (req, res) => {
    try {
        console.log("Request:", req.body);

        const newStudent = await Student.create(req.body);
        res.status(201).json(newStudent);
    } catch (error) {
        console.error({ error: 'Error al crear el estudiante', detail: error.original });
        res.status(500).json({ error: 'Error al crear el estudiante' });
    }
});

// Actualizar un estudiante por ID
router.put('/:id', async (req, res) => {
    try {
        console.log("ID:", req.params.id);

        const student = await Student.findByPk(req.params.id);
        if (!student) return res.status(404).json({ error: 'Estudiante no encontrado' });

        await student.update(req.body);
        res.status(200).json(student);
    } catch (error) {
        console.error({ error: 'Error al actualizar el estudiante', detail: error.original });
        res.status(500).json({ error: 'Error al actualizar el estudiante' });
    }
});

// Eliminar un estudiante por ID
router.delete('/:id', async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (!student) return res.status(404).json({ error: 'Estudiante no encontrado' });

        await student.destroy();
        res.status(200).json({ message: 'Estudiante eliminado correctamente' });
    } catch (error) {
        console.error({ error: 'Error al eliminar el estudiante', detail: error.original });
        res.status(500).json({ error: 'Error al eliminar el estudiante' });
    }
});

export default router;