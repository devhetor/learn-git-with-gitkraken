import assert from 'node:assert'
import { soma } from './soma.js'



function main() {
    const minhaSoma = soma(1,2)
    
    console.log(minhaSoma)
    assert.deepStrictEqual(minhaSoma, 3)

}

main()