// you can import a image file as your avatar
// import avatar from './assets/avatar.png'

export default {
  info: {
    title: 'Blog Name', // use for homepage link
    name: 'Your Name',
    bio: 'Write your bio here.',
    // avatar: avatar // if you imported a image file
    avatar: '', // path to avatar image
    username: 'zfanli', // username of github
    social: { // for generate social link in footer
      weibo: 'path/to/your/weibo',
      github: 'path/to/your/github',
      DIY: 'or/you/can/add/new/link',
    },
  },
  config: {
    // turn off google analysis for dev
    // ga: {
    //   id: 'UA-104770482-1', // tack id of google analysis
    // },
    gitalk: id => ({
      clientID: 'de47adf4f9d0394257eb',
      clientSecret: '7619f44e8a16d8d6b450a588caf2e087f1fb8500',
      repo: 'comments', // repo for store comments
      owner: 'zfanli', // username
      admin: ['zfanli'], // array of usernames
      id: `pure-blog/${id}`, // uniqueness and less then 50
      distractionFreeMode: false, // masking on focus
    }),
  },
}
