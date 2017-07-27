![](https://travis-ci.org/wmui/vueblog.svg?branch=master)
### Ԥ��
- [������ʾ](https://vueblog.86886.wang)

### ���������ͼ���ջ
- ����ϵͳ��windows10 64λ
- �������� ��webstorm sublime
- ǰ�ˣ�Vue + vue-router + vuex 
- ��ˣ�Node.js(����express���) + mongodb

###  ��ɫ����
- ֧�ַ������Ⱦ
- ֧�ֱ��⶯̬�л�
- ֧��PWA
- ֧��markdown�﷨����ʽ����github��񣬴������
- ֧�����±���Ϊ�ݸ�
- ֧�ֱ�ǩ�͹鵵����

### Ŀ¼�ṹ
```
    ���� build                          // �����ļ�
    ���� example                        // ��ʾ
    ���� public                         // ������Դ
    ���� server                         // �����
    ��      ���� db.js                   // ���ݿ�dao���װ
    ��      ���� md5.js                  // �������
    ��      ���� router.js               // �����·��
    ��      ���� settings.js             // ���ݿ��ʼ������
    ����src                             // ǰ��
    ��   ���� api                        // ���е�api����
    ��   ���� assets                     // ǰ��ģ��
    ��   ���� components                 // vue���
    ��   ��          ���� admin           // ��̨�ɸ������
    ��   ��          ���� global          // ǰ�˿ɸ������
    ��   ���� router                     // ǰ��·��
    ��   ���� store                      // vuex�ļ�
    ��   ���� util                       // ����������
    ��   ��    ���� filters.js            // ����������
    ��   ��    ���� title.js              // ���⺯��
    ��   ���� views                      // �����
    ��   ��    ���� admin                 // ��̨���
    ��   ��    ���� Article.vue           // ��������ҳ
    ��   ��    ���� CreateListView.js     // Ԥ��Ⱦ
    ��   ��    ���� List.Vue              // �����б�
    ��   ��    ���� Login.Vue             // ��½
    ��   ���� app.js                     // ��Ŀ����ļ�
    ��   ���� App.vue                    // ȫ�����
    ��   ���� entry-client.js            // �ͻ�����Ⱦ
    ��   ���� entry-server.js            // �������Ⱦ
    ��   ���� index.template.html        // ģ��
    ���� static                         // ��̬�ļ�
    ���� .babelrc                       // babel����
    ���� .gitignore                     // git�ϴ�����
    ���� ecosystem.json                 // pm2����
    ���� manifest.json                  // PWA����
    ���� LICENSE                        // ��ԴЭ��
    ���� package.json                   // npm������
    ���� README.md                      // ��Ŀ˵��
    ���� server.js                      // ��Ŀ�����ļ�
    ���� yarn.lock                      // yarn����
```

### pc��Ч��ͼ 
#### ��ҳЧ��ͼ
![image](https://github.com/wmui/vueblog/blob/master/example/demo/01.png)  
#### �������Ч��ͼ
![image](https://github.com/wmui/vueblog/blob/master/example/demo/02.png)  
#### ��̨����ҳ��
![image](https://github.com/wmui/vueblog/blob/master/example/demo/03.png)  
#### ��̨�����б�
![image](https://github.com/wmui/vueblog/blob/master/example/demo/04.png)  
#### �޸ĸ�����Ϣ
![image](https://github.com/wmui/vueblog/blob/master/example/demo/05.png)  

### �ֻ���Ч��ͼ����chrome�������ʾ
#### ��ӵ�����
![image](https://github.com/wmui/vueblog/blob/master/example/demo/wap-01.png)
#### ����Ч��
![image](https://github.com/wmui/vueblog/blob/master/example/demo/wap-02.png)
#### ��ҳЧ��
![image](https://github.com/wmui/vueblog/blob/master/example/demo/wap-03.png)
#### ����ҳЧ��
![image](https://github.com/wmui/vueblog/blob/master/example/demo/wap-04.png)

### ����������Ŀ
**ע��**��Node.js�汾Ҫ��7����  
1. ��װ[mongodb](https://www.mongodb.com/download-center?jmp=nav#community)������
2. ��װ[nodejs](https://nodejs.org/en/)����
3. �޸�`/server/settings.js`�µ���������Ϣ����Ҳ����Ĭ�ϲ��޸ģ�Ĭ���û���:q��Ĭ�����룺q

```
    let user = 'q';
    let pass = md5('q');
    let avatar = 'avatar.jpg';
    let intro ='Never too old to learn';
    let nickname = 'VueBlog';
    module.exports = {
        dbUrl:'mongodb://localhost:27017/vueblog',
        user:user,
        pass:pass,
        avatar:avatar,
        intro:intro,
        nickname:nickname
    }
```
4. �򿪱����նˣ�ִ��`npm install`,`npm run dev `,����http://localhost:8080  

### �̸̳���
- [nodejs����������̳�һ](https://segmentfault.com/a/1190000010098126)
- [nodejs����������̶̳�����vue��Ŀ��������](https://segmentfault.com/a/1190000010205995)
- [nodejs����������̳������������node+vue+mongodb����Ŀ](https://segmentfault.com/a/1190000010213434)
- [nodejs����������̳��ģ�����ssl֤�飬����Ϊhttps](https://segmentfault.com/a/1190000010281512)

### ����
����Ŀ����[vue-hackernews-2.0](https://github.com/vuejs/vue-hackernews-2.0)���������ڸ��£������Ǹ�����Ŀ��������ֱ���������ϣ���ӭissue����ӭPR��

### ��ԴЭ��
[GPL-3.0](https://choosealicense.com/licenses/gpl-3.0/)





