s = "WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"
import re

def song_decoder(song):
    return re.sub("(WUB)+"," ",song)

print(song_decoder(s))