import { lendingFixture } from "../../shared/fixtures";
import { Mocks, Signers } from "../../shared/types";
import { waffle } from "hardhat";
export const unitLendingTesting = (): void => {
  //   // to silent warning for duplicate definition of Transfer event
  //   ethers.utils.Logger.setLogLevel(ethers.utils.Logger.levels.OFF);

  describe(`Lending`, async () => {
    before(async function () {
      const wallets = waffle.provider.getWallets();

      this.signers = {} as Signers;
      this.signers.deployer = wallets[0];
      this.signers.alice = wallets[1];
      this.signers.bob = wallets[2];

      this.loadFixture = waffle.createFixtureLoader(wallets);
    });

    beforeEach(async function () {
      const { lending, mockUsdc } = await this.loadFixture(lendingFixture);

      this.lending = lending;
      this.mocks = {} as Mocks;
      this.mocks.mockUsdc = mockUsdc;
    });

    context(`#deploying`, async function () {
      it("Should start  here", async function () {});
    });
  });
};
