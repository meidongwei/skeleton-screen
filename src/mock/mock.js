import Mock from 'mockjs'
function getLogoImg () {
	return Mock.Random.image('100x100', Mock.Random.hex())
}
Mock.mock(/getUserDetails/, {
  'list|10': [
    {
      'name': 'skeleton screen test',
      'email': '450650472@qq.com',
      'imgurl': 'https://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaELImyOUmrVjSb9ic27KVibGasR3xuMRmZGbO4VYueopgOACYwuI2jgGX7w6aaXYPf5G9uqmLniczGnvQ/132'
    }
  ]
})
