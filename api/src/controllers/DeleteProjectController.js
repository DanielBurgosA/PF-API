const deleteProjectController = async (req, res) => {
    res.status(200).json("se borro un proyecto");
};

module.exports = {deleteProjectController};