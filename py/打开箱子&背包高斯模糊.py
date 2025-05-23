import mod.client.extraClientApi as clientApi

levelId = clientApi.GetLevelId()

comp = clientApi.GetEngineCompFactory().CreatePostProcess(levelId)

def ClientPlayerInventoryOpenEvent(a,b,c,d):
  comp.SetEnableGaussianBlur(True)
def ClientChestOpenEvent():
  comp.SetEnableGaussianBlur(True)
def ClientChestCloseEvent():
  comp.SetEnableGaussianBlur(False)
def ClientPlayerInventoryCloseEvent():
  comp.SetEnableGaussianBlur(False)