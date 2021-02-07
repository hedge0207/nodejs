import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.write);

const post = new Router();
post.get('/', postsCtrl.read);
post.delete('/', postsCtrl.remove);
post.patch('/', postsCtrl.update);

// /:id 주소로 들어오면 postsCtrl.chekcObjectId 미들웨어가 실행된다.
// 미들웨어의 실행 결과 next()로 빠지면
// post.routes 중 http 메서드가 맞는 곳으로 빠지게 된다.
posts.use('/:id', postsCtrl.chekcObjectId, post.routes());

export default posts;
