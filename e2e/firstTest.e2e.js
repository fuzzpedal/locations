describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have home screen with query input', async () => {
    await expect(element(by.text('Home'))).toBeVisible();
    await expect(element(by.id('query'))).toBeVisible();
  });

  it('should display results when there is a query', async () => {
    await element(by.id('query')).typeText('Torquay');
    await expect(element(by.id('6953744'))).toBeVisible();
  });

  it('should display the detail view after tapping location', async () => {
    await element(by.id('query')).typeText('Torquay');
    await element(by.id('6953744')).tap();
    await expect(element(by.text('Torquay Railway Station'))).toBeVisible();
    await expect(element(by.id('map'))).toBeVisible();
  });
});
