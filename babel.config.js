module.exports = {
  // 如果该文件存在，React Native将会使用该配置文件
  // 如果不存在, React Native 默认使用metro-react-native-babel-preset作为转译器
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        alias: {
          '@': './src',
        },
      },
    ],
  ],
}
