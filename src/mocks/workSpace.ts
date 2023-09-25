import { typeCard } from '~/enums/card'

const CARD_TYPES: typeCard[] = [
  typeCard.danger,
  typeCard.default,
  typeCard.primary,
  typeCard.secondary,
  typeCard.success,
  typeCard.warning
]

const WORKSPACES = [
  {
    _id: '1',
    name: 'Reactjs',
    cover_photo: 'https://thienanblog.com/wp-content/uploads/2017/10/react-logo.png'
  },
  {
    _id: '2',
    name: 'NodeJs',
    cover_photo:
      'https://www.courses.tutorialswebsite.com/assets/front/img/category/Nodejs-banner.jpeg'
  },
  {
    _id: '3',
    name: 'flutter',
    cover_photo:
      'https://webandcrafts.com/blog/wp-content/uploads/2019/08/Flutter-for-Mobile-App-Development_banner-01.jpg'
  },
  {
    _id: '4',
    name: 'JavaScript',
    cover_photo: 'https://vntalking.com/wp-content/uploads/2020/02/class-trong-javascript.jpeg'
  },
  {
    _id: '5',
    name: 'TypeScript',
    cover_photo: 'https://andrebtoe.files.wordpress.com/2016/05/positronx-banner-1152-1.jpg'
  },
  {
    _id: '6',
    name: 'NextJs',
    cover_photo:
      'https://imgix.prensa.li/https%3A%2F%2Fstatic.prensa.li%2Fstories%2Fc2%2F66%2Ff1%2F74%2Fc266f174-8f7a-4472-bbf7-465ecbf786cb.png?fit=crop&max-h=450&mh=450&w=800&s=eb2bf89a26705c3ab104f9a12cd6c770'
  },
  {
    _id: '7',
    name: 'NestJs',
    cover_photo:
      'https://media.licdn.com/dms/image/C5612AQE2arhg9Hm07w/article-cover_image-shrink_600_2000/0/1645140783149?e=2147483647&v=beta&t=cvr_Q6f83GoIWirlnhVXduhODfEkdP4JfuI8HoegYl4'
  },
  {
    _id: '8',
    name: 'ReactNavite',
    cover_photo:
      'https://www.qed42.com/sites/default/files/styles/featured_image/public/2018-11/react-native.png?itok=lj4A4r0I'
  }
]

const WORKSPACE_REACT = {
  _id: '1',
  projectName: 'ReactJs',
  members: [
    {
      _id: 'memberId_1',
      name: 'quan',
      avatarImg: 'https://menshaircuts.com/wp-content/uploads/2023/01/tp-simple-hair-style-men.jpg'
    },
    {
      _id: 'memberId_2',
      name: 'quyen',
      avatarImg:
        'https://cdn.tuoitre.vn/thumb_w/640/2020/6/22/justin-bieber-1-1592797878809968908887.jpeg'
    },
    {
      _id: 'memberId_3',
      name: 'cuong',
      avatarImg: 'https://www.realmenrealstyle.com/wp-content/uploads/2023/03/Undercut-2.jpg'
    },
    {
      _id: 'memberId_4',
      name: 'binh',
      avatarImg: 'https://i.pinimg.com/564x/47/3a/24/473a2411f16f0c8c9308f8de45d2eef7.jpg'
    }
  ],
  columns: [
    {
      _id: 'columnId_1',
      columnName: 'README',
      cards: [
        {
          _id: 'cardId_1',
          title: 'UI Design',
          type: typeCard.default,
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem iusto tempore aliquam laboriosam omnis saepe at eaque numquam quibusdam consequatur error nemo, blanditiis',
          reply: 5,
          date: 'Now 19',
          imgUrl: 'https://intietkiem.com/wp-content/uploads/2020/02/thiet-ke-poster-dep.jpg',
          members: [
            {
              _id: 'useId_1',
              avatar:
                'https://cdnimg.vietnamplus.vn/uploaded/bokttj/2023_01_02/avatar_the_way_of_water.jpg',
              name: 'manhquan'
            }
          ],
          avatarUrl:
            'https://cdnimg.vietnamplus.vn/uploaded/bokttj/2023_01_02/avatar_the_way_of_water.jpg'
        },
        {
          _id: 'cardId_2',
          type: typeCard.danger,
          title: 'UI Design',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem iusto tempore aliquam laboriosam omnis saepe at eaque numquam quibusdam consequatur error nemo, blanditiis',
          reply: 1,
          date: 'Now 19',
          imgUrl: 'https://i.pinimg.com/564x/09/52/06/095206ef08f87da0bd92d5f810765a7e.jpg',
          members: [
            {
              _id: 'useId_1',
              avatar:
                'https://cdnimg.vietnamplus.vn/uploaded/bokttj/2023_01_02/avatar_the_way_of_water.jpg',
              name: 'manhquan'
            }
          ],
          avatarUrl:
            'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000'
        },
        {
          _id: 'cardId_3',
          type: typeCard.primary,
          title: 'UI Design',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem iusto tempore aliquam laboriosam omnis saepe at eaque numquam quibusdam consequatur error nemo, blanditiis',
          reply: 0,
          date: 'Now 19',
          imgUrl: 'https://i.pinimg.com/564x/67/2d/b4/672db4d8dff78b69c926788c0863cad2.jpg',
          avatarUrl:
            'https://m.media-amazon.com/images/M/MV5BZTQyZDllNTAtZmEwYy00ZDk3LThhMWUtZmMzZDI1NWY2MmQ1XkEyXkFqcGdeQXVyMTY2NDE3ODAz._V1_.jpg'
        },
        {
          _id: 'cardId_4',
          type: typeCard.warning,
          title: 'UI Design',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem iusto tempore aliquam laboriosam omnis saepe at eaque numquam quibusdam consequatur error nemo, blanditiis',
          reply: 2,
          date: 'Now 19',
          imgUrl: 'https://i.pinimg.com/564x/73/3c/68/733c688bf6f725345c18190da00e159b.jpg',
          avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/E-girl.png'
        },
        {
          _id: 'cardId_5',
          type: typeCard.success,
          title: 'UI Design',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem iusto tempore aliquam laboriosam omnis saepe at eaque numquam quibusdam consequatur error nemo, blanditiis',
          reply: 2,
          date: 'Now 19',
          imgUrl: 'https://i.pinimg.com/564x/b3/30/bc/b330bc31a6915f51348a4696431d2984.jpg',
          avatarUrl: 'https://www.theladders.com/wp-content/uploads/man_outside_091318.jpg'
        }
      ]
    },
    {
      _id: 'columnId_2',
      columnName: 'Todo',
      cards: [
        {
          _id: 'cardId_6',
          type: typeCard.warning,
          title: 'UI Design',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem iusto tempore aliquam laboriosam omnis saepe at eaque numquam quibusdam consequatur error nemo, blanditiis',
          reply: 4,
          date: 'Now 19',
          imgUrl: 'https://i.pinimg.com/564x/73/3c/68/733c688bf6f725345c18190da00e159b.jpg',
          avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/E-girl.png'
        },
        {
          _id: 'cardId_7',
          type: typeCard.default,
          title: 'UI Design',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem iusto tempore aliquam laboriosam omnis saepe at eaque numquam quibusdam consequatur error nemo, blanditiis',
          reply: 8,
          date: 'Now 19',
          imgUrl: 'https://intietkiem.com/wp-content/uploads/2020/02/thiet-ke-poster-dep.jpg',
          avatarUrl:
            'https://cdnimg.vietnamplus.vn/uploaded/bokttj/2023_01_02/avatar_the_way_of_water.jpg'
        },
        {
          _id: 'cardId_8',
          type: typeCard.danger,
          title: 'UI Design',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem iusto tempore aliquam laboriosam omnis saepe at eaque numquam quibusdam consequatur error nemo, blanditiis',
          reply: 1,
          date: 'Now 19',
          imgUrl: 'https://i.pinimg.com/564x/09/52/06/095206ef08f87da0bd92d5f810765a7e.jpg',
          avatarUrl:
            'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000'
        },
        {
          _id: 'cardId_9',
          type: typeCard.primary,
          title: 'UI Design',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem iusto tempore aliquam laboriosam omnis saepe at eaque numquam quibusdam consequatur error nemo, blanditiis',
          reply: 7,
          date: 'Now 19',
          imgUrl: 'https://i.pinimg.com/564x/67/2d/b4/672db4d8dff78b69c926788c0863cad2.jpg',
          avatarUrl:
            'https://m.media-amazon.com/images/M/MV5BZTQyZDllNTAtZmEwYy00ZDk3LThhMWUtZmMzZDI1NWY2MmQ1XkEyXkFqcGdeQXVyMTY2NDE3ODAz._V1_.jpg'
        },
        {
          _id: 'cardId_10',
          type: typeCard.success,
          title: 'UI Design',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem iusto tempore aliquam laboriosam omnis saepe at eaque numquam quibusdam consequatur error nemo, blanditiis',
          reply: 9,
          date: 'Now 19',
          imgUrl: 'https://i.pinimg.com/564x/b3/30/bc/b330bc31a6915f51348a4696431d2984.jpg',
          avatarUrl: 'https://www.theladders.com/wp-content/uploads/man_outside_091318.jpg'
        }
      ]
    },
    {
      _id: 'columnId_3',
      columnName: 'Issues',
      cards: [
        {
          _id: 'cardId_11',
          type: typeCard.danger,
          title: 'UI Design',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem iusto tempore aliquam laboriosam omnis saepe at eaque numquam quibusdam consequatur error nemo, blanditiis',
          reply: 4,
          date: 'Now 19',
          imgUrl: 'https://i.pinimg.com/564x/09/52/06/095206ef08f87da0bd92d5f810765a7e.jpg',
          avatarUrl:
            'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000'
        },
        {
          _id: 'cardId_12',
          type: typeCard.primary,
          title: 'UI Design',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem iusto tempore aliquam laboriosam omnis saepe at eaque numquam quibusdam consequatur error nemo, blanditiis',
          reply: 2,
          date: 'Now 19',
          imgUrl: 'https://i.pinimg.com/564x/67/2d/b4/672db4d8dff78b69c926788c0863cad2.jpg',
          avatarUrl:
            'https://m.media-amazon.com/images/M/MV5BZTQyZDllNTAtZmEwYy00ZDk3LThhMWUtZmMzZDI1NWY2MmQ1XkEyXkFqcGdeQXVyMTY2NDE3ODAz._V1_.jpg'
        },
        {
          _id: 'cardId_13',
          type: typeCard.default,
          title: 'UI Design',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem iusto tempore aliquam laboriosam omnis saepe at eaque numquam quibusdam consequatur error nemo, blanditiis',
          reply: 6,
          date: 'Now 19',
          imgUrl: 'https://intietkiem.com/wp-content/uploads/2020/02/thiet-ke-poster-dep.jpg',
          avatarUrl:
            'https://cdnimg.vietnamplus.vn/uploaded/bokttj/2023_01_02/avatar_the_way_of_water.jpg'
        },
        {
          _id: 'cardId_14',
          type: typeCard.warning,
          title: 'UI Design',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem iusto tempore aliquam laboriosam omnis saepe at eaque numquam quibusdam consequatur error nemo, blanditiis',
          reply: 2,
          date: 'Now 19',
          imgUrl: 'https://i.pinimg.com/564x/73/3c/68/733c688bf6f725345c18190da00e159b.jpg',
          avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/E-girl.png'
        },
        {
          _id: 'cardId_15',
          type: typeCard.success,
          title: 'UI Design',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem iusto tempore aliquam laboriosam omnis saepe at eaque numquam quibusdam consequatur error nemo, blanditiis',
          reply: 1,
          date: 'Now 19',
          imgUrl: 'https://i.pinimg.com/564x/b3/30/bc/b330bc31a6915f51348a4696431d2984.jpg',
          avatarUrl: 'https://www.theladders.com/wp-content/uploads/man_outside_091318.jpg'
        }
      ]
    },
    {
      _id: 'columnId_4',
      columnName: 'Doing',
      cards: [
        {
          _id: 'cardId_16',
          type: typeCard.primary,
          title: 'UI Design',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem iusto tempore aliquam laboriosam omnis saepe at eaque numquam quibusdam consequatur error nemo, blanditiis',
          reply: 2,
          date: 'Now 19',
          imgUrl: 'https://i.pinimg.com/564x/67/2d/b4/672db4d8dff78b69c926788c0863cad2.jpg',
          avatarUrl:
            'https://m.media-amazon.com/images/M/MV5BZTQyZDllNTAtZmEwYy00ZDk3LThhMWUtZmMzZDI1NWY2MmQ1XkEyXkFqcGdeQXVyMTY2NDE3ODAz._V1_.jpg'
        },
        {
          _id: 'cardId_17',
          type: typeCard.success,
          title: 'UI Design',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem iusto tempore aliquam laboriosam omnis saepe at eaque numquam quibusdam consequatur error nemo, blanditiis',
          reply: 2,
          date: 'Now 19',
          imgUrl: 'https://i.pinimg.com/564x/b3/30/bc/b330bc31a6915f51348a4696431d2984.jpg',
          avatarUrl: 'https://www.theladders.com/wp-content/uploads/man_outside_091318.jpg'
        },
        {
          _id: 'cardId_18',
          type: typeCard.default,
          title: 'UI Design',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem iusto tempore aliquam laboriosam omnis saepe at eaque numquam quibusdam consequatur error nemo, blanditiis',
          reply: 3,
          date: 'Now 19',
          imgUrl: 'https://intietkiem.com/wp-content/uploads/2020/02/thiet-ke-poster-dep.jpg',
          avatarUrl:
            'https://cdnimg.vietnamplus.vn/uploaded/bokttj/2023_01_02/avatar_the_way_of_water.jpg'
        },
        {
          _id: 'cardId_19',
          type: typeCard.danger,
          title: 'UI Design',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem iusto tempore aliquam laboriosam omnis saepe at eaque numquam quibusdam consequatur error nemo, blanditiis',
          reply: 2,
          date: 'Now 19',
          imgUrl: 'https://i.pinimg.com/564x/09/52/06/095206ef08f87da0bd92d5f810765a7e.jpg',
          avatarUrl:
            'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000'
        },
        {
          _id: 'cardId_20',
          type: typeCard.warning,
          title: 'UI Design',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem iusto tempore aliquam laboriosam omnis saepe at eaque numquam quibusdam consequatur error nemo, blanditiis',
          reply: 5,
          date: 'Now 19',
          imgUrl: 'https://i.pinimg.com/564x/73/3c/68/733c688bf6f725345c18190da00e159b.jpg',
          avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/E-girl.png'
        }
      ]
    },
    {
      _id: 'columnId_5',
      columnName: 'Done',
      cards: [
        {
          _id: 'cardId_21',
          type: typeCard.success,
          title: 'UI Design',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem iusto tempore aliquam laboriosam omnis saepe at eaque numquam quibusdam consequatur error nemo, blanditiis',
          reply: 9,
          date: 'Now 19',
          imgUrl: 'https://i.pinimg.com/564x/b3/30/bc/b330bc31a6915f51348a4696431d2984.jpg',
          avatarUrl: 'https://www.theladders.com/wp-content/uploads/man_outside_091318.jpg'
        }
        // {
        //   _id: 'cardId_22',
        //   type: typeCard.danger,
        //   content:
        //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem iusto tempore aliquam laboriosam omnis saepe at eaque numquam quibusdam consequatur error nemo, blanditiis',
        //   reply: 6,
        //   date: 'Now 19',
        //   imgUrl: 'https://i.pinimg.com/564x/09/52/06/095206ef08f87da0bd92d5f810765a7e.jpg',
        //   avatarUrl:
        //     'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000'
        // },
        // {
        //   _id: 'cardId_23',
        //   type: typeCard.default,
        //   content:
        //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem iusto tempore aliquam laboriosam omnis saepe at eaque numquam quibusdam consequatur error nemo, blanditiis',
        //   reply: 2,
        //   date: 'Now 19',
        //   imgUrl: 'https://intietkiem.com/wp-content/uploads/2020/02/thiet-ke-poster-dep.jpg',
        //   avatarUrl:
        //     'https://cdnimg.vietnamplus.vn/uploaded/bokttj/2023_01_02/avatar_the_way_of_water.jpg'
        // }

        // {
        //   _id: 'cardId_24',
        //   type: typeCard.primary,
        //   content:
        //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem iusto tempore aliquam laboriosam omnis saepe at eaque numquam quibusdam consequatur error nemo, blanditiis',
        //   reply: 2,
        //   date: 'Now 19',
        //   imgUrl: 'https://i.pinimg.com/564x/67/2d/b4/672db4d8dff78b69c926788c0863cad2.jpg',
        //   avatarUrl:
        //     'https://m.media-amazon.com/images/M/MV5BZTQyZDllNTAtZmEwYy00ZDk3LThhMWUtZmMzZDI1NWY2MmQ1XkEyXkFqcGdeQXVyMTY2NDE3ODAz._V1_.jpg'
        // },
        // {
        //   _id: 'cardId_25',
        //   type: typeCard.warning,
        //   content:
        //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem iusto tempore aliquam laboriosam omnis saepe at eaque numquam quibusdam consequatur error nemo, blanditiis',
        //   reply: 0,
        //   date: 'Now 19',
        //   imgUrl: 'https://i.pinimg.com/564x/73/3c/68/733c688bf6f725345c18190da00e159b.jpg',
        //   avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/E-girl.png'
        // }
      ]
    },
    {
      _id: 'columnId_6',
      columnName: 'Test',
      cards: [
        {
          _id: 'cardId_26',
          type: typeCard.success,
          title: 'UI Design',
          content: '',
          reply: 0,
          date: 'Now 19',
          imgUrl: '',
          avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/E-girl.png'
        }
      ]
    }
  ]
}

export { WORKSPACES, CARD_TYPES }
export default WORKSPACE_REACT
