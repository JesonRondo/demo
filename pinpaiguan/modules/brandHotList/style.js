export default {
  .container {
    width: 750rem;
    flex-direction: column;
    flexWrap : wrap
  }
  .head {
    width: 750rem;
    height: 86rem;
    paddingLeft: 44rem;
    paddingRight: 44rem;
    background-color: #f6f6f6;
    justifyContent: space-between;
    alignItems : center
  }
  .title {
    font-size: 30rem
  }
  .more {
    font-size: 24rem
  }
  .body {
    flex-direction: row;
    flexWrap: nowrap;
    background-color: #fff;
    justifyContent: space-between
  }
  .left {
    position: relative;
    height: 442rem;
    width: 306rem
  }
  .leftLink {
    // height: 332;
  }
  .leftImage {
    width: 306rem;
    height: 402rem
  }
  .coupon {
    justifyContent: center;
    alignItems: center;
    position: absolute;
    left: 88rem;
    top: 338rem;
    width: 130rem;
    height: 48rem;
    borderWidth: 1px;
    borderColor: #999;
    borderRadius: 3rem;
  }
  .couponInner {
    font-size: 22rem;
    color: #333;
    background-color: #fff
  }
  .right {
    width: 446rem;
    height: 440rem;
    flex-direction: column;
    background-color: #e5e5e5
  }
  .rightLine {
    width: 446rem;
    height: 220rem;
    marginBottom: 1px;
    flex-direction: row
  }
  .rightItem {
    width: 220rem;
    height: 220rem;
    marginLeft: 1px;
    background-color: #fff
  }
  .itemImage {
    width: 220rem;
    height: 220rem
  }
}