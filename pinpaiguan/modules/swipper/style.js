export default {
  container: {
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  indicatorWrap: {
    width: 750,
    position: 'absolute',
    left: 0,
    bottom: 10,
    justifyContent: 'center'
  },
  triggerInner: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 18,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.7)'
  },
  indicator: {
    backgroundColor: '#8c8c8c',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 10,
    marginRight: 10
  },
  active: {
    backgroundColor: '#fe6c9c'
  }
}