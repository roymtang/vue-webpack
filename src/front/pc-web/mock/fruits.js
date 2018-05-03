
const clazz = [
    {
        id: 0,
        name: '浆果类'
    },
    {
        id: 1,
        name: '核果类'
    },
    {
        id: 2,
        name: '仁果类'
    },
    {
        id: 3,
        name: '瓜类'
    },
    {
        id: 4,
        name: '其它'
    }
]

const list = [
    {
        id: 0,
        name: '草莓',
        clazz: 0,
        price: '10',
        num: 100,
        recommend: 'Y'
    },
    {
        id: 1,
        name: '蓝莓',
        clazz: 0,
        price: '10',
        num: 100,
        recommend: 'N'
    },
    {
        id: 2,
        name: '桑葚',
        clazz: 0,
        price: '10',
        num: 100,
        recommend: 'Y'
    },
    {
        id: 3,
        name: '葡萄',
        clazz: 0,
        price: '10',
        num: 100,
        recommend: 'N'
    },
    {
        id: 4,
        name: '金橘',
        clazz: 1,
        price: '10',
        num: 100,
        recommend: 'N'
    },
    {
        id: 5,
        name: '脐橙',
        clazz: 1,
        price: '10',
        num: 100,
        recommend: 'Y'
    },
    {
        id: 6,
        name: '柚子',
        clazz: 1,
        price: '10',
        num: 100,
        recommend: 'Y'
    },
    {
        id: 6,
        name: '苹果',
        clazz: 2,
        price: '10',
        num: 100,
        recommend: 'Y'
    },
    {
        id: 7,
        name: '山竹',
        clazz: 2,
        price: '10',
        num: 100,
        recommend: 'Y'
    }
]

export default {
    getFruitsList () {
        return list
    },
    getClassList() {
        return clazz
    },
    deleteFruits: config => {
        let index = -1
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === JSON.parse(config.body).id) {
                index = i
            }
        }

        if (index >= 0) {
            list.splice(index, 1)
            return true
        } else {
            return false
        }
    },
    getFruitsByID: config => {
        for (let obj of list) {
            if (obj.id === JSON.parse(config.body).id) {
                return obj
            }
        }
    },
    modifyFruitsByID: config => {
        let new_obj = JSON.parse(config.body)
        for (let obj of list) {
            if (obj.id === new_obj.id) {
                obj.name = new_obj.name || obj.name
                obj.clazz = new_obj.clazz || obj.clazz
                obj.price = new_obj.price || obj.price
                obj.num = new_obj.num || obj.num
                obj.recommend = new_obj.recommend || obj.recommend
                break
            }
        }
    }
}