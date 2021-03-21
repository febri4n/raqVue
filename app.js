const app = Vue.createApp({
  data() {
    return {
      title: 'Assassination Classroom 2nd Season',
      chara: 'Korosensei',
      quotes: 'Take advantage of what you have, while you have it.'
    }
  },
  methods: {
    async getQuotes() {
      // console.log(this.firstName)
      // const res = await fetch('https://randomuser.me/api')
      // const { results } = await res.json()
      // console.log(results)

      const res = await fetch('https://animechan.vercel.app/api/quotes')
      const results = await res.json()
      console.log(results)

      this.title = results[0].anime
      this.chara = results[0].character
      this.quotes = results[0].quote
    }
  },
})

app.mount('#quotes')