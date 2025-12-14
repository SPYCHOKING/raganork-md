module.exports = {
  name: "intro",
  cmd: ["intro","about"],
  category: "info",
  desc: "Shows an intro with video and text",

  async exec({ sock, m, args, text }) {
    try {
      // send GIF/Video
      await sock.sendMessage(m.from, {
        video: {
          url: https://streamable.com/a6fyfy"
        },
        gifPlayback: true,
      }, { quoted: m });

      // intro message
      await sock.sendMessage(m.from, {
        text: `✦ Hello! This is my intro!\n\nName: Joyboy\nAbout: Developer & Creator 🚀`
      }, { quoted: m });

    } catch (err) {
      console.error("Intro plugin error:", err);
    }
  }
};
