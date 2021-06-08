<template class="background">
  <body class="flex flex-col h-screen justify-between">
    <header class="page-header items-center">
      <div v-if="startQuiz">
        <a href="/" class="page-header__logo" title="Go home">
          <img src="quiz.png" alt="" width="200" />
        </a>
      </div>
    </header>

    <div v-if="showScore">
      <!-- End Screen -->
      <main class="pt-2">
        <p
          class="text-2xl font-semibold tracking-widest leading-loose text-center text-purple-400"
        >
          YOU SCORED {{ score }} OF {{ questions.length }}
        </p>
        <br />
        <div class="relative" style="height: 200px">
          <div
            class="w-48 h-48 absolute m-auto inset-0 bg-indigo-900 border-4 rounded-full"
          >
            <h1
              style="left: -65px; top: 75px"
              class="w-80 h-20 absolute text-7xl font-bold tracking-wider leading-10 text-center text-white"
            >
              {{ score }}
            </h1>
          </div>
        </div>
        <div v-if="score === questions.length">
          <p class="pt-2 text-xl leading-loose text-center text-purple-400">
            Winner!! Here is your phrase...
          </p>
          <div>
            <p class="pt-2 text-xl leading-loose text-center text-purple-400">
              {{ phrases[Math.floor(Math.random() * phrases.length)].text }}
            </p>
          </div>
        </div>
        <div v-else>
          <p class="pt-2 text-xl leading-loose text-center text-purple-400">
            <a href="https://conf.strapi.io/quizz"> Click me to try again! </a>
          </p>
        </div>
        <div class="pt-3">
          <button
            class="flex items-center bg-blue-600 rounded m-5 py-2 px-4 mx-auto text-white font-semibold"
          >
            <!-- generated using https://tech.cymi.org/tweet-intents -->
            <a
              href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fconf.strapi.io%2Fquizz&text=I%20just%20played%20the%20Strapi%20Quizz%2C%20try%20it%20out&hashtags=StrapiConf"
              target="_blank"
            >
              Tweet your Score
            </a>
          </button>
          <button
            class="flex items-center bg-indigo-900 rounded w-auto m-5 py-2 px-4 mx-auto text-white font-semibold"
          >
            <a
              href="https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html"
              target="_blank"
            >
              Get Started with Strapi
            </a>
          </button>
        </div>
      </main>
    </div>
    <div v-else>
      <!-- Start Screen -->
      <span v-if="!startQuiz">
        <main class="pt-5">
          <div class="page-header items-center pb-20">
            <a
              href="/"
              class="hero container max-w-screen-lg mx-auto pb-10 flex justify-center"
              title="Go home"
            >
              <img class="mx-auto w-15 h-10" src="quiz.png" alt="" />
            </a>
          </div>
          <h1
            class="text-4xl font-extrabold leading-loose text-center text-white"
          >
            Hello there, welcome to the Strapi Quizz
          </h1>
          <br />
          <p class="text-l text-center text-purple-400">
            The rules are, when and if you get a 100% score, a tweet with blanks
            and a hashtag will be displayed. Fill in the blank(s) and send the
            tweet! Funniest / most creative tweets win prizes. Let's gooo!!
          </p>
          <div class="pt-5">
            <button
              class="flex items-center bg-purple-500 rounded m-5 py-2 px-4 mx-auto text-white text-2xl font-semibold"
              @click="startQuizFunc()"
            >
              Start Quizz
            </button>
          </div>
        </main>
      </span>
      <span v-else>
        <!-- Actual Quiz -->
        <main style="padding-top: 2em">
          <p
            class="text-2xl font-semibold tracking-widest leading-loose text-center text-purple-400"
          >
            QUESTION {{ currentQuestion + 1 }} / {{ questions.length }}
          </p>
          <p
            class="text-xl sm:text-xl md:text-3xl font-bold tracking-wide leading-10 text-center text-white w-70 h-20 pb-5 sm:px-3 md:px-6"
          >
            {{ questions[currentQuestion].questionText }}
          </p>

          <div
            class="flex flex-wrap overflow-hidden md:-mx-1 lg:-mx-4 xl:-mx-4"
          >
            <div
              :key="index"
              v-for="(option, index) in questions[currentQuestion]
                .answerOptions"
              @click="handleAnswerClick(option.isCorrect)"
              class="w-full overflow-hidden my-2 px-2 w-full sm:my-2 sm:px-2 sm:w-full md:my-1 md:px-1 md:w-1/2 lg:my-3 lg:px-3 lg:w-1/2 xl:my-3 xl:px-3 xl:w-1/2"
            >
              <button
                class="items-center flex mx-auto bg-indigo-900 hover:bg-gradient-to-t from-purple-700 to-purple-500 hover:border-2 border-2 rounded-lg border-purple-300 w-90 h-35"
              >
                <p
                  class="text-2xl font-bold tracking-wide leading-loose text-left text-white mb-10 pb-10 pl-2"
                >
                  *
                </p>
                <p
                  class="w-80 h-5 pb-5 text-xl font-semibold tracking-wide leading-7 text-center text-white"
                >
                  {{ option.answerText }}
                </p>
              </button>
            </div>
          </div>
        </main>
      </span>
    </div>
    <footer class="page-footer">
      <small
        ><p class="text-center text-gray-500">
          Copyright © 2021 Strapi, Inc. All rights reserved.
        </p></small
      >
    </footer>
  </body>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");

:root {
  --accent: #c2a361;
  --grey: #444;
}

html {
  font-size: 100%;
  scroll-behavior: smooth;
  background: #0e0128;
}

.answer-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

body {
  font-family: "Poppins", sans-serif;
  line-height: 1.65;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 10px;
}

@media only screen and (max-width: 468px) {
  .page-header {
    flex-direction: column;
  }
}

.dee {
  position: absolute;
  right: 25%;
  margin-bottom: 20px;
}

.page-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
}

.page-header nav a:not(:hover):not(:focus) {
  color: currentColor;
  text-decoration: none;
}

nav a {
  margin: 0 12px;
  font-size: 1.25em;
}

main {
  flex-grow: 1;
  max-width: 75ch;
  width: 100%;
  margin: 0 auto;
}

.page-footer {
  text-align: center;
  margin-bottom: 8px;
}

a[href]:hover {
  text-decoration: none;
}

.footnotes {
  font-size: 0.8em;
}

/* Typography */
p {
  margin-bottom: 1.15rem;
}

h1 {
  font-size: 3.052em;
}

h2 {
  font-size: 2.441em;
}

h3 {
  font-size: 1.953em;
}

h4 {
  font-size: 1.563em;
}

h5,
.larger {
  font-size: 1.25em;
}

small {
  font-size: 0.8em;
}

/* backlinks */
.backlinks-title {
  margin-bottom: 0;
}

.backlinks-container {
  margin-top: 0;
}

.backlinks-default {
  margin-top: 0;
  margin-left: 16px;
  color: var(--grey);
}

.backlink__preview {
  display: none;

  position: absolute;
  bottom: 8px;
  left: 100%;
  background-color: #fff;
  border-radius: 4px;
  padding: 4px;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.25);
  width: 348px;
  max-height: 148px;
  overflow: hidden;
}
.backlink__preview::after {
  content: "";
  position: absolute;
  bottom: 0;
  background: linear-gradient(transparent, white);
  width: 100%;
  height: 24px;
}

.backlink__preview h1 {
  font-size: 1.2rem;
  margin-top: 8px;
  font-weight: bold;
}

.backlink {
  width: fit-content;
  position: relative;
}

.backlink:hover {
  padding-right: 4px; /* Allow mouse to travel between link and modal */
}

.backlink:hover .backlink__preview {
  display: block;
}
</style>


<script>
import gql from "graphql-tag";

export default {
  data() {
    return {
      title: "StrapiConf Quizz",
      description: "Welcome to the official StrapiConf Quizz App",
      image: "https://strapiconf-api-prod.strapi.io/uploads/small_Strapi_Conf_Break_Ad_8194b66a3a.png",
      card: "summary_large_image",
      currentQuestion: 0,
      showScore: false,
      score: 0,
      countDown: 30,
      timer: null,
      startQuiz: false,
      questions: [
	

    // break two 
    // {
		// 	questionText: 'What license is the Strapi Community version under?',
		// 	answerOptions: [
		// 		{ answerText: 'MIT', isCorrect: true },
    //     { answerText: 'Apache', isCorrect: false },
		// 		{ answerText: 'GPLv3', isCorrect: false },
		// 		{ answerText: 'FreeBSD', isCorrect: false },
                
			
		// 	],
		// },{
		// 	questionText: 'What database ORMs connectors does Strapi currently use?',
		// 	answerOptions: [
		// 		{ answerText: 'Mongoose', isCorrect: true },
    //     { answerText: 'Sequalize', isCorrect: false },
		// 		{ answerText: 'Prisma', isCorrect: false },
		// 		{ answerText: 'Bookshelf/Knex', isCorrect: true },
                
			
		// 	],
		// },{
		// 	questionText: 'What version of Node.js does Strapi support',
		// 	answerOptions: [
		// 		{ answerText: 'v10', isCorrect: false },
    //     { answerText: 'v12', isCorrect: true },
		// 		{ answerText: 'v14', isCorrect: true },
		// 		{ answerText: 'v15', isCorrect: false },
                
			
		// 	],
		// },{
		// 	questionText: 'What database is currently not supported by Strapi?',
		// 	answerOptions: [
		// 		{ answerText: 'MongoDB', isCorrect: false },
    //     { answerText: 'MySQL', isCorrect: false },
		// 		{ answerText: 'PostgreSQL', isCorrect: false },
		// 		{ answerText: 'Redis', isCorrect: true },
                
			
		// 	],
		// },{
		// 	questionText: 'What language is Strapi written in ?',
		// 	answerOptions: [
		// 		{ answerText: 'TypeScript', isCorrect: false },
    //     { answerText: 'Golang', isCorrect: false },
		// 		{ answerText: 'JavaScript', isCorrect: true },
		// 		{ answerText: 'PHP', isCorrect: false },
                
			
		// 	],
		// },{
		// 	questionText: 'Who let the dogs out?',
		// 	answerOptions: [
		// 		{ answerText: 'You', isCorrect: false },
    //     { answerText: 'Me', isCorrect: false },
		// 		{ answerText: 'Strapi', isCorrect: false },
		// 		{ answerText: 'What dogs?', isCorrect: true },
                
			
		// 	],
		// },{
		// 	questionText: 'How much are you enjoying StrapiConf?',
		// 	answerOptions: [
		// 		{ answerText: 'A lot', isCorrect: false },
    //     { answerText: 'Too too much', isCorrect: true },
    //     { answerText: 'No so much', isCorrect: false },
		// 		{ answerText: 'Meeh', isCorrect: false },
                
			
		// 	],
		// },
    // {
		// 	questionText: 'What does the fox say???',
		// 	answerOptions: [
		// 		{ answerText: 'Meow', isCorrect: false },
    //     { answerText: 'Wooo', isCorrect: true },
    //     { answerText: 'Mooo', isCorrect: false },
		// 		{ answerText: 'Hmmmm', isCorrect: true },
                
			
		// 	],
		// },
    // break three
		// {
		// 	questionText: 'Where do you place production server configuration files?',
		// 	answerOptions: [
		// 		{ answerText: './', isCorrect: false },
		// 		{ answerText: 'config/', isCorrect: false },
		// 		{ answerText: 'config/env/production/', isCorrect: true },
		// 		{ answerText: 'config/production/', isCorrect: false },
		// 	],
		// },
    // {
		// 	questionText: 'Which official plugin does Strapi not have?',
		// 	answerOptions: [
		// 		{ answerText: 'Internationalization', isCorrect: false },
		// 		{ answerText: 'Search Plugin', isCorrect: true },
		// 		{ answerText: 'GraphQL', isCorrect: false },
		// 		{ answerText: 'Documentation', isCorrect: false },
		// 	],
		// },
    // {
		// 	questionText: 'How many employees does Strapi have?',
		// 	answerOptions: [
		// 		{ answerText: '26', isCorrect: false },
		// 		{ answerText: '35', isCorrect: true },
		// 		{ answerText: '45', isCorrect: false },
		// 		{ answerText: '12', isCorrect: false },
		// 	],
		// },
    // {
		// 	questionText: 'What colour hair does @malgamves have?',
		// 	answerOptions: [
		// 		{ answerText: 'Purple', isCorrect: false },
		// 		{ answerText: 'Green', isCorrect: false },
		// 		{ answerText: 'Black', isCorrect: false },
		// 		{ answerText: 'Blonde', isCorrect: true },
		// 	],
		// },
    // {
		// 	questionText: 'How many stars does Strapi have?',
		// 	answerOptions: [
		// 		{ answerText: '36k', isCorrect: true },
		// 		{ answerText: '40k', isCorrect: false },
		// 		{ answerText: '20k', isCorrect: false },
		// 		{ answerText: '33k', isCorrect: false },
		// 	],
		// },
		// {
		// 	questionText: 'What is the Strapi Product Teams favourite animal?',
		// 	answerOptions: [
		// 		{ answerText: 'Chicken', isCorrect: false },
		// 		{ answerText: 'Lion', isCorrect: false },
		// 		{ answerText: 'Penguin', isCorrect: true },
		// 		{ answerText: 'Giraffe', isCorrect: false },
		// 	],
		// },
		// {
		// 	questionText: 'How do you upload media files in a REST POST request?',
		// 	answerOptions: [
		// 		{ answerText: 'x-www-form-urlencoded', isCorrect: false },
		// 		{ answerText: 'raw', isCorrect: false },
		// 		{ answerText: 'form-data', isCorrect: true },
		// 		{ answerText: 'binary', isCorrect: false },
		// 	],
    //     },
    //     {
		// 	questionText: 'What frontend framework does Strapi use for its Admin Panel?',
		// 	answerOptions: [
		// 		{ answerText: 'React', isCorrect: true },
		// 		{ answerText: 'Ember', isCorrect: false },
    //     				{ answerText: 'Gatsby', isCorrect: false },
		// 		{ answerText: 'Angular', isCorrect: false },
		// 	],
    //     },
    //     {
		// 	questionText: 'Where are people currently _not_ using Strapi?',
		// 	answerOptions: [
		// 		{ answerText: 'The Moon', isCorrect: true },
		// 		{ answerText: 'Banks', isCorrect: false },
		// 		{ answerText: 'Factories', isCorrect: false },
		// 		{ answerText: 'Hospitals', isCorrect: true },
		// 	],
    //     },
			],
      phrases: [
        { text: "I love Strapi because ______ #StrapiConf" },
        { text: "I always ______ when my code is building #StrapiConf" },
        { text: "The 'A' in Jamstack stands for ______ #StrapiConf" },
        { text: "______ to the moon!! #StrapiConf" },
        { text: "I attended and all I got was this ______ #StrapiConf" },
        { text: "I was ______ before knowing Strapi #Strapi" }
      ]
    };
  },
    head() {
    return {
      meta: [
          { name: 'twitter:site', content: '@strapijs' },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:card', content: this.card },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.image
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.title
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.image
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.image
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.title
        }
      ]
    }
  },
  methods: {
    startQuizFunc() {
      this.startQuiz = true;
      this.countDownTimer();
    },
    handleAnswerClick(isCorrect) {
      clearTimeout(this.timer);
      let nextQuestion = this.currentQuestion + 1;
      if (isCorrect) {
        this.score = this.score + 1;
      }
      if (nextQuestion < this.questions.length) {
        this.currentQuestion = nextQuestion;

        this.countDown = 30;
        this.countDownTimer();
      } else {
        this.showScore = true;
      }
    },
    countDownTimer() {
      if (this.countDown > 0) {
        this.timer = setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      } else {
        this.handleAnswerClick(false);
      }
    }
  },
  apollo: {
    questions: gql`
      query {
        questions {
          questionText
          answerOptions {
            answerText
            isCorrect
          }
        }
      }
    `
  }
};
</script>