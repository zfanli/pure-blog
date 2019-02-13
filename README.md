# pure-blog

Pure Blog, a simple SPA blog.

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```

## Configuration

Edit `src/App.config.js` to configure this app.

```js
import avatar from "./assets/avatar.png";

export default {
  info: {
    title: "use for home link",
    name: "your name",
    bio: "your bio",
    avatar, // path to avatar
    username: "username of github for make a link",
    social: {
      // for generate social link in footer
      github: "https://github.com/(your username here)",
      others: "link/to/others/social/site"
    }
  },
  config: {
    // delete this block to disable ga
    ga: {
      id: "tack id of google analysis"
    },
    // delete this block to disable gitalk
    gitalk: () => ({
      clientID: "client id",
      clientSecret: "client secret",
      repo: "repo for store comments",
      owner: "username of owner",
      admin: ["array of usernames"],
      id: "uniqueness and less then 50", // location.path
      distractionFreeMode: false // masking on focus
    })
  }
};
```

## Front Matter

Front matter of post file.

```yaml
---
title: title of post # *required
subtitle: some descriptions about this post # *required
date: 2018-12-16 00:00:00 +8 # *required, time zone is optional
# NOTICE: `date` is used as unique id to initial comment issue by gitalk, so DO NOT change it after comment issue was created! Otherwise new issue will be created.
lastUpdateTime: 2018-12-20 13:01:37 +8 # *optional, show at post page if exists
externalCSS: file name of external CSS if need # optional
tags: # optional, show at homepage if exists
  - tags list
  - it's an array
---

```

## Commit labels

- `docs`: updates about documents.
- `update`: normal update.
- `fix`: fixes bugs.
- `refactor`: source refactor.
- `feat`: new features finished.

## Todo list

- [ ] about me page
- [x] tags page
- [ ] Searching
- [ ] i18n
- [x] images zoom viewer
  - [X] use `medium-zoom` tool
- [x] scroll to top
- [x] loading pages
  - [X] hand-write loading pages
  - [ ] pending to new method, for instance, generate loading pages automatically
- [ ] stylize theme
  - [ ] normal theme
  - [ ] dark theme
