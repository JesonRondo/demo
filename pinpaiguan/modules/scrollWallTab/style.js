export default {
  wrap: {
    position: 'relative',
    marginTop: 30,
    marginBottom: 16,
    height: 95
  },
  container: {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    width: 750,
    height: 95,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff'
  },
  scroller: {
    flex: 1
  },
  item: {
    position: 'relative',
    height: 95,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemName: {
    fontSize: 32,
    color: '#666'
  },
  active: {
    fontSize: 32,
    color: '#F44B6E'
  },
  bgLine: {
    position: 'absolute',
    height: 'pixel',
    width: 750,
    left: 0,
    bottom: 0,
    backgroundColor: '#ECECEC'
  },
  feLine: {
    position: 'absolute',
    height: 'pixel',
    left: 0,
    right: 0,
    bottom: 'pixel',
    backgroundColor: '#F44B6E'
  }
}