const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    addReaction,
    updateThought,
    deleteThought,
    removeReaction
} = require('../../controllers/thought-ctrl')
router.route("/").get(getAllThoughts).post(createThought);

router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)
    router.route("/:thoughtId/reactions").post(addReaction).delete(deleteReaction);

router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)
    router.route("/:thoughtId/reactions").post(addReaction).delete(deleteReaction);

module.exports = router;