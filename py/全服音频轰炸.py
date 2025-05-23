delay = 0.5
soundName = 'block.end_portal.spawn'
soundVolume = 1


import mod.client.extraClientApi as clientApi
levelId = clientApi.GetLevelId()

def playSound(name, volume, Target):
  comp = clientApi.GetEngineCompFactory().CreateCustomAudio(levelId)
  comp.PlayCustomMusic(name, (0,0,0), 1, 1, False, Target)

def playSoundToAllPlayer():
  playerList = clientApi.GetPlayerList()
  localId = clientApi.GetLocalPlayerId()
  for playerId in playerList:
    if playerId == localId:
      continue
    playSound(soundName, soundVolume, playerId)

comp = clientApi.GetEngineCompFactory().CreateGame(levelId)
comp.AddRepeatedTimer(delay, playSoundToAllPlayer)