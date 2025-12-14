module.exports = {
  name: "intro",
  alias: ["about", "me"],
  desc: "Show intro with video",
  category: "info",
  react: "✨",

  start: async (client, m) => {
    try {
      // 🔹 STEP 1: Send looping GIF / short video
      await client.sendMessage(m.from, {
        video: {
          url: "https://streamable.com/a6fyfy"
        },
        gifPlayback: true, // makes MP4 act like GIF (loop)
        caption: "" // keep empty for clean look
      }, { quoted: m })

      // 🔹 STEP 2: Send intro text
      const introText = `
✦✦✦ *WELCOME TO MY SPACE* ✦✦✦

| Name : JoyboySer |
| Age : 21 |
| Passion : Coding • Cyber Tech • Creativity |
| Hobby : Anime • Music • Late-night builds |
| Personality : Calm • Focused |
| Belief : “Small steps → Big results” |
| Status : Leveling up every day 🚀 |

✦✦✦ *END* ✦✦✦
      `

      await client.sendMessage(m.from, {
        text: introText
      }, { quoted: m })

    } catch (err) {
      console.error("Intro plugin error:", err)
    }
  }
}
