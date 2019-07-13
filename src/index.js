function thousands(params) {
    const paramsArr = params.toString().includes('.') ? params.toString().split('.') : [params]
    let integer = paramsArr[0]
    let decimals = paramsArr[1] ? '.' + paramsArr[1] : ''

    const reg = /(-?\d+)(\d{3})/
    while (reg.test(integer)) {
        integer = integer.replace(reg, "$1,$2")
    }

    return integer + decimals
}

export default thousands

