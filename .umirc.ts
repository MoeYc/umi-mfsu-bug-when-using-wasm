import { defineConfig } from 'umi'

export default defineConfig({
  routes: [
    { path: '/', component: 'index' },
  ],
  npmClient: `pnpm`,
  
  // mfsu: false,

  // wasm 的配置，供调试使用
  // chainWebpack(config) {
  //   config.set('experiments', {
  //     ...config.get('experiments'),
  //     asyncWebAssembly: true
  //   })

  //   const REG = /\.wasm$/

  //   config.module.rule('asset').exclude.add(REG).end();

  //   config.module
  //     .rule('wasm')
  //     .test(REG)
  //     .exclude.add(/node_modules/)
  //     .end()
  //     .type('webassembly/async')
  //     .end()
  // }
})
