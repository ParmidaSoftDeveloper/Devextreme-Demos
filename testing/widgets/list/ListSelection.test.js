import { Selector } from 'testcafe';
import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

const LIST_ITEM_CONTENT_CLASS = 'dx-list-item-content';
const SELECTBOX_CLASS = 'dx-selectbox';
const POPUP_WRAPPER_CLASS = 'dx-popup-wrapper';

fixture('List.ListSelection')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t
      .resizeWindow(900, 800);
  });

runManualTest('List', 'ListSelection', ['jQuery', 'React', 'Vue', 'Angular'], (test) => {
  test('List Selection', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await t.click(Selector(`.${LIST_ITEM_CONTENT_CLASS}`).nth(3));

    await takeScreenshot('List after click on item, selectionMode=all.png');

    await t.click(Selector(`.${SELECTBOX_CLASS}`).nth(0));
    await t.click(Selector(`.${POPUP_WRAPPER_CLASS} .${LIST_ITEM_CONTENT_CLASS}`).nth(2));

    await t.wait(2000);

    await takeScreenshot('List after change selectionMode to multiple.png');

    await t.click(Selector(`.${SELECTBOX_CLASS}`).nth(0));
    await t.click(Selector(`.${POPUP_WRAPPER_CLASS} .${LIST_ITEM_CONTENT_CLASS}`).nth(1));

    await takeScreenshot('List after change selectionMode to single.png');

    await t.click(Selector(`.${SELECTBOX_CLASS}`).nth(0));
    await t.click(Selector(`.${POPUP_WRAPPER_CLASS} .${LIST_ITEM_CONTENT_CLASS}`).nth(0));

    await takeScreenshot('List after change selectionMode to none.png');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
