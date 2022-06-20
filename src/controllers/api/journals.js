const getJournals = async (req, res) => {
  try {
    const [journals] = await req.db.query("SELECT * FROM journals");

    return res.json({
      success: true,
      data: journals,
    });
  } catch (error) {
    console.log(`[ERROR: Failed to get journals | ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to get journals",
    });
  }
};

const getJournal = async (req, res) => {
  try {
    const { id } = req.params;

    const [journal] = await req.db.query("SELECT * FROM journals WHERE id=?", [
      id,
    ]);

    return res.json({
      journal,
    });
  } catch (error) {
    console.log(`[ERROR: Failed to get journal | ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to get journal",
    });
  }
};

const createJournal = (req, res) => {
  res.send("createJournal");
};

const updateJournal = (req, res) => {
  res.send("updateJournal");
};

const deleteJournal = (req, res) => {
  res.send("deleteJournal");
};

module.exports = {
  getJournals,
  getJournal,
  createJournal,
  updateJournal,
  deleteJournal,
};
