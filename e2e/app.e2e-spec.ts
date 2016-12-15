import { Ng2DockerGcpSpikePage } from './app.po';

describe('ng2-docker-gcp-spike App', function() {
  let page: Ng2DockerGcpSpikePage;

  beforeEach(() => {
    page = new Ng2DockerGcpSpikePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
