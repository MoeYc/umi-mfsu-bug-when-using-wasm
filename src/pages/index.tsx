import assert from 'assert'


// case 1
// 预期: 无论 mfsu 是否开启，没有配置 wasm 的 webpack 配置时，该行为应该成立
// 现状：开启 mfsu 后报错
import wasmUrl from '@dqbd/tiktoken/lite/tiktoken_bg.wasm'
assert(typeof wasmUrl === 'string')
console.log('wasmUrl: ', wasmUrl)

// case 2
// 无论 mfsu 是否开启，配置了 wasm 的 webpack 配置时，该行为应该成立
// 现状：开启 mfsu 后报错
// import * as wasm from '@dqbd/tiktoken/lite/tiktoken_bg.wasm'
// assert(typeof wasm.__wbg_tiktoken_free === 'function')
// console.log('wasm: ', wasm);


export default function HomePage() {
  return <div />
}
