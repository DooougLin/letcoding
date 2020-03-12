class Header{
  constructor(title, width){
    this.title = title;
    this.width = `${width}px`;
  }

  static getObjectFromArray(arr){
    return arr.map(e => new Header(...e));
  }
}

export default {
  // 一页15个宝贝
  data: () => ({
    headers: Header.getObjectFromArray([
      ['宝贝', 403], ['单价', 107], ['数量', 54],
      ['商品操作', 128], ['实付款', 128], ['交易状态', 115], ['交易操作', 128]
    ]),
    orders: [{
      'id': 7974907844777846524,
      'date': '2020-01-05',
      'storeName': 'LetCoding店铺',
      'items': [
        {
          'id': 12313,
          'name': '水星免驱USB无线网卡台式机千兆笔记本家用电脑360wifi接收器迷你无限网络信号驱动5G上网卡双频wi-fi随身',
          'img': '',
          'oldPrice': '23.00',
          'price': '15.00',
          'type': '口味:(送红杯+勺)奶香7条*3盒',
          'count': 1,
          'rights': [1, 2, 3],
          'totalPrice': '27.7',
          'freight': '0.00'
        },
        {
          'id': 123133,
          'name': '雀巢咖啡杯',
          'oldPrice': '23.00',
          'img': '',
          'price': '15.00',
          'type': '',
          'count': 1,
          'rights': [1, 2, 3]
        }
      ],
      'status': 1
    }]
  })
};
