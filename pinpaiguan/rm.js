
// web prefix style
const webPrefixStyles = makeMap(
  'flexDirection,flexWrap,justifyContent,alignItems,alignSelf,flex,boxOrient,' +
  'boxPack,boxAlign,boxFlex,boxLines,transform,transitionDuration'
)

// web older style
const webExtraStyles = {
  flexDirection: [{
    hack: 'boxOrient',
    values: {
      'row': 'horizontal',
      'column': 'vertical'
    }
  }],
  justifyContent: [{
    hack: 'boxPack',
    values: {
      'flex-start': 'start',
      'flex-end': 'end',
      'space-between': 'justify',
      'space-around': 'justify'
    }
  }],
  alignItems: [{
    hack: 'boxAlign',
    values: {
      'flex-start': 'start',
      'flex-end': 'end'
    }
  }],
  flex: [{
    hack: 'boxFlex',
    values: {}
  }],
  flexWrap: [{
    hack: 'boxLines',
    values: {
      'wrap': 'multiple',
      'nowrap': 'single'
    }
  }]
}
