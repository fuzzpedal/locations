# Tech Test

## Prerequisites
- Usual React Native prerequisites
- yvm or yarn (developed with 1.22.5)
- nvm or node (developed with v12.13.1)

## Installation
```
yvm use (if using yvm) 
nvm use (if using nvm)
yarn
```

## Run
```
yarn ios
```

## Testing

### Install Detox
```
npm install -g detox-cli
xcode-select --install
brew tap wix/brew
brew install applesimutils
```

### Run tests
```
detox test
```

