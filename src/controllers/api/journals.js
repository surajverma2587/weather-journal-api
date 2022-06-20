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

const createJournal = async (req, res) => {
  try {
    const payload = req.body;

    await req.db.query("INSERT INTO journals (title, imageUrl) VALUES (?, ?)", [
      payload.name,
      payload.imageUrl,
    ]);

    res.json({
      success: true,
    });
  } catch (error) {
    console.log(`[ERROR: Failed to create journal | ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to create journal",
    });
  }
};

const updateJournal = (req, res) => {
  res.send("updateJournal");
};

const deleteJournal = async (req, res) => {
  try {
    const { id } = req.params;

    await req.db.query("DELETE FROM journals WHERE id=?", [id]);

    return res.json({
      success: true,
    });
  } catch (error) {
    console.log(`[ERROR: Failed to delete journal | ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to delete journal",
    });
  }
};

module.exports = {
  getJournals,
  getJournal,
  createJournal,
  updateJournal,
  deleteJournal,
};
