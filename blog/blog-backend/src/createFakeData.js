import Post from './models/post';

export default function createFakeData() {
  const posts = [...Array(40).keys()].map((i) => ({
    title: `포스트${i}`,
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec rutrum est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed nec enim quis sem tincidunt vehicula ac et sem. Donec interdum ut purus non aliquet. Cras eros odio, egestas in velit et, facilisis lacinia neque. Nulla lobortis mi ut nunc rhoncus, eu ultricies libero consectetur. Donec at mollis tortor, quis maximus enim. Donec scelerisque aliquam faucibus. Pellentesque consectetur porta felis, ut elementum velit fringilla et. Pellentesque est dolor, luctus sed est in, auctor facilisis felis.',
    tags: ['가짜', '데이터'],
  }));
  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}
