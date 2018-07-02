import axios from 'axios'
import Router from 'koa-router'
import config from '../config'
import db from '../models'
import {checkToken, checkGithubToken} from '../middlewares/check-token'

const router = new Router()
const user = require('../controllers/user')
const tag = require('../controllers/tag')
const article = require('../controllers/article')
const comment = require('../controllers/comment')
const tool = require('../controllers/tool')

router
  .get('/rss.xml', tool.rss)
  .get('/sitemap.xml', tool.sitemap)
  .get('/robots.txt', tool.robots)
  .post('/api/send-email', tool.sendEmail)

router
  .get(/\/api\/oauth\/github\/callback/, user.githubCallback)
  .get('/api/oauth/github/:state?', user.githubLogin)

router
  .get('/api/user/:username?', user.getUserInfo)
  .patch('/api/user', checkToken, user.patchUserInfo)
  .post('/api/login', user.login)
  .post('/api/logout', checkToken, user.logout)

router
  .get('/api/tags/:id?', tag.getTagsOrArticles)
  .post('/api/tag', checkToken, tag.postTag)
  .patch('/api/tag', checkToken, tag.patchTag)
  .del('/api/tag/:id?', checkToken, tag.deleteTag)

router
  .get('/api/search/:keyword?', article.search)
  .get('/api/article/:id?', article.getArticle)
  .get('/api/articles/:page?/:limit?', article.getArticles)
  .get('/api/private-articles', checkToken, article.getPrivateArticles)
  .get('/api/archives', article.archives)
  .post('/api/article', checkToken, article.postArticle)
  .post('/api/upload', checkToken, article.upload)
  .patch('/api/article', checkToken, article.patchArticle)
  .del('/api/article/:id?', checkToken, article.deleteArticle)

router
  .post('/api/comment', comment.postComment)
  .get('/api/comments', comment.getComments)
  .del('/api/comment/:id?', checkToken, comment.deleteComment) // 管理员可以删除评论

export default router
