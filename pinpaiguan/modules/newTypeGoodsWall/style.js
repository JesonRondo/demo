const PINK = '#F44B6E'
const GREEN = '#93bb21'

export default {
  container: {
    minHeight: 2000
  },
  line: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    flexWrap: 'nowrap',
    justifyContent: "space-between",
    marginBottom: 16 
  },
  nothing: {
    height: 1000
  },
  item: {
    position: 'relative',
    width: 178 * 2,
    height: 650,
    flexDirection: 'column',
    borderColor: '#DFDFDF',
    borderWidth: 'pixel',
    backgroundColor: '#fff'
  },
  thumb: {
    width: 178 * 2,
    height: 267 * 2
  },
  image: {
    width: 178 * 2,
    height: 267 *2,
    objectFit: 'contain'
  },
  bottom: {
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  title: {
    paddingTop: 15,
    justifyContent: 'center'
  },
  titleText: {
    fontSize: 24,
    width: 155* 2,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    color: '#666'
  },
  extInfo: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'flex-start',
    // height: 40,
    marginTop: 20
    // justifyContent: 'space-between',
  },
  price: {
    color: PINK,
    fontSize: 24,
    marginLeft: 20,
    marginRight: 25
  },
  moreInfo: {
    position: 'absolute',
    right: 0,
    top: -20,
    width: 80,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  moreInfoLabel: {
    color: PINK,
    fontSize: 40,
    fontWeight: 'bold'
  },
  star: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  starImage: {
    width: 26,
    height: 23,
    marginTop: 2,
    marginRight: 5
  },
  starNumber: {
    fontSize: 24,
    color: '#999'
  },
  similar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  find: {
    height: 55,
    backgroundColor: PINK,
    justifyContent: 'center',
    alignItems: 'center'
  },
  findText: {
    color: '#fff',
    fontSize: 28
  },
  shopInfo: {
    backgroundColor: '#fff',
    opacity: '0.9',
    flexDirection: 'column',
    alignItems: 'center'
  },
  shopName: {
    marginTop: 10,
    fontSize: 30,
    color: '#666',
    textAlign: 'center'
  },
  rank: {
    width: 158 * 2,
    paddingBottom: 18,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  rankItem: {
    marginTop: 12
  },
  rankItemText: {
    color: '#888',
    fontSize: 20
  },
  rankItemScore: {
    color: PINK,
    // color: GREEN,
    fontSize: 20,
    marginLeft: 15
  },
  rankItemImage: {
    width: 19,
    height: 19,
    marginLeft: 8
  }
  
}