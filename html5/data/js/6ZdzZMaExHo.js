window.globalProvideData('slide', '{"title":"1","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":2,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide2","width":1280,"height":720,"resume":true,"background":{"type":"swf","imagedata":{"assetId":32,"url":"","type":"normal","width":0,"height":0,"mobiledx":0,"mobiledy":0}},"id":"6ZdzZMaExHo","actionGroups":{"ReviewInt_5Zo8snoGnX1":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5Zo8snoGnX1.5eNXr88715Y"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5Zo8snoGnX1.637pGcJZWKZ"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5Zo8snoGnX1.6C3MNqIZia0"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5Zo8snoGnX1.61PvJrK0ARA"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5ZKavYV5GvH.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5Zo8snoGnX1_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5Zo8snoGnX1_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5Zo8snoGnX1","typea":"var","valueb":"6Ha6VVjUdmC","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6Ha6VVjUdmC.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5Zo8snoGnX1"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6Ha6VVjUdmC.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5Zo8snoGnX1"}]}]}]},"ReviewIntCorrectIncorrect_5Zo8snoGnX1":{"kind":"actiongroup","actions":[{"kind":"set_review","objRef":{"type":"string","value":"5Zo8snoGnX1.5eNXr88715Y"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"5Zo8snoGnX1.637pGcJZWKZ"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"5Zo8snoGnX1.6C3MNqIZia0"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"5Zo8snoGnX1.61PvJrK0ARA"},"enabled":{"type":"boolean","value":true}}]},"AnsweredInt_5Zo8snoGnX1":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5Zo8snoGnX1"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_5Zo8snoGnX1":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5Zo8snoGnX1.5eNXr88715Y"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5Zo8snoGnX1.637pGcJZWKZ"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5Zo8snoGnX1.6C3MNqIZia0"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5Zo8snoGnX1.61PvJrK0ARA"},"enabled":{"type":"boolean","value":false}}]},"5Zo8snoGnX1_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5ZKavYV5GvH.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6Ha6VVjUdmC.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5Zo8snoGnX1"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5ZKavYV5GvH.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5ZKavYV5GvH.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5Zo8snoGnX1"}]}]}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_6ZdzZMaExHo":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6jerulltyvQ"}}]},"NavigationRestrictionPreviousSlide_6ZdzZMaExHo":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00000000001"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6oR3pVPcwua","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6oR3pVPcwua","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#6Ha6VVjUdmC_TimerStopped","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"starttimer","id":"_player.6Ha6VVjUdmC_timer"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#6Ha6VVjUdmC_TimerExpired","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5Zo8snoGnX1"}]},{"kind":"showtimer","id":"_player.6Ha6VVjUdmC_timer"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5Zo8snoGnX1","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_5Zo8snoGnX1"}],"elseActions":[{"kind":"exe_actiongroup","id":"5Zo8snoGnX1_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5Zo8snoGnX1","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5Zo8snoGnX1","typea":"var","valueb":"6Ha6VVjUdmC","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6Ha6VVjUdmC"},"completed_slide_ref":{"type":"string","value":"_player.6jSTatqwwcJ.6efhRZWx6Pj"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_5Zo8snoGnX1","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5Zo8snoGnX1","typea":"var","valueb":"6Ha6VVjUdmC","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6Ha6VVjUdmC"},"completed_slide_ref":{"type":"string","value":"_player.6jSTatqwwcJ.6efhRZWx6Pj"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6ZdzZMaExHo"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6ZdzZMaExHo"}]}],"slideLayers":[{"audiolib":[{"kind":"audio","assetId":33,"id":"5bIpU30Gpey"}],"enableSeek":true,"enableReplay":true,"timeline":{"duration":265055,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5Zo8snoGnX1.5eNXr88715Y"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5Zo8snoGnX1.637pGcJZWKZ"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5Zo8snoGnX1.6C3MNqIZia0"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5Zo8snoGnX1.61PvJrK0ARA"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5Zo8snoGnX1"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"666kFkQ7rXu"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"5bIpU30Gpey"}},{"kind":"media_play","objRef":{"type":"string","value":"5bIpU30Gpey"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"5bIpU30Gpey"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"65BPYqC6Yq7"}}]},{"kind":"ontimelinetick","time":250,"actions":[{"kind":"show","transition":"custom","animationId":"Entrance","reverse":false,"objRef":{"type":"string","value":"5xAg8ZbMSWI"}}]}]},"objects":[{"kind":"scrollarea","contentwidth":775,"contentheight":211,"objects":[{"kind":"droparea","style":"matching","reviewdata":2,"shapemaskId":"","xPos":28,"yPos":107,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":190,"rotateYPos":44.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_61PvJrK0ARA_-240491763","type":"vectortext","altText":"Kebun","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":103,"bottom":65,"pngfb":false,"pr":{"l":"Lib","i":99}}},"html5data":{"xPos":0,"yPos":0,"width":380,"height":89,"strokewidth":0}},"width":380,"height":89,"resume":true,"useHandCursor":true,"id":"61PvJrK0ARA"},{"kind":"shufflegroup","objects":[{"kind":"dragitem","style":"matching","connectdata":"choices.choice_6Eopyn89Dvg","reviewdata":2,"shapemaskId":"","xPos":424,"yPos":107,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":190,"rotateYPos":44.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xB7FDFF","alpha":100,"stop":0},{"kind":"color","rgb":"0xA1EDEF","alpha":100,"stop":100}]}}],"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6C3MNqIZia0_-829350484","type":"vectortext","altText":"Ekosistem Buatan","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":273,"bottom":65,"pngfb":false,"pr":{"l":"Lib","i":100}}},"html5data":{"xPos":0,"yPos":0,"width":380,"height":89,"strokewidth":0}},"width":380,"height":89,"resume":true,"useHandCursor":true,"id":"6C3MNqIZia0"},{"kind":"dragitem","style":"matching","connectdata":"choices.choice_5X16QqZ5hgM","reviewdata":1,"shapemaskId":"","xPos":424,"yPos":4,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":190,"rotateYPos":44.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":3,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xB7FDFF","alpha":100,"stop":0},{"kind":"color","rgb":"0xA1EDEF","alpha":100,"stop":100}]}}],"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5eNXr88715Y_1088393427","type":"vectortext","altText":"Ekosistem Alami","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":252,"bottom":65,"pngfb":false,"pr":{"l":"Lib","i":101}}},"html5data":{"xPos":0,"yPos":0,"width":380,"height":89,"strokewidth":0}},"width":380,"height":89,"resume":true,"useHandCursor":true,"id":"5eNXr88715Y"}],"shuffle":true,"depth":2,"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":0,"rotateYPos":0,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"scrolling":true,"shuffleLock":false,"width":0,"height":0,"resume":true,"useHandCursor":true,"id":""},{"kind":"droparea","style":"matching","reviewdata":1,"shapemaskId":"","xPos":28,"yPos":4,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":190,"rotateYPos":44.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_637pGcJZWKZ_-581275147","type":"vectortext","altText":"Danau Vulkanik","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":224,"bottom":65,"pngfb":false,"pr":{"l":"Lib","i":102}}},"html5data":{"xPos":0,"yPos":0,"width":380,"height":89,"strokewidth":0}},"width":380,"height":89,"resume":true,"useHandCursor":true,"id":"637pGcJZWKZ"}],"shapemaskId":"","xPos":171,"yPos":174,"tabIndex":2,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":430,"rotateYPos":219,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"html5data":{"url":"","xPos":171,"yPos":174,"width":860,"height":438,"strokewidth":0}},"width":860,"height":438,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":0,"top":0,"right":861,"bottom":439,"altText":"Matching Drag and Drop","pngfb":false,"pr":{"l":"Lib","i":98}}},"id":"5Zo8snoGnX1"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"666kFkQ7rXu_817864722","id":"01","linkId":"txt__default_666kFkQ7rXu","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":989,"bottom":68,"pngfb":false,"pr":{"l":"Lib","i":104}}}],"shapemaskId":"","xPos":114,"yPos":89,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":576,"rotateYPos":37.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1152,"bottom":75,"altText":"Hubungkan ekosistem berikut dengan jenisnya.","pngfb":false,"pr":{"l":"Lib","i":103}},"html5data":{"xPos":0,"yPos":0,"width":1152,"height":75,"strokewidth":0}},"width":1152,"height":75,"resume":true,"useHandCursor":true,"id":"666kFkQ7rXu"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":18,"id":"01","url":"story_content/6fHabcxmjOP_DX274_DY274.swf","type":"normal","altText":"home_1-removebg-preview.png","width":225,"height":225,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":28,"yPos":32,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":57,"rotateYPos":57,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":114,"bottom":114,"altText":"home_1-removebg-preview.png","pngfb":false,"pr":{"l":"Lib","i":46}},"html5data":{"xPos":0,"yPos":0,"width":114,"height":114,"strokewidth":0}},"animations":[{"kind":"animation","id":"Entrance","duration":750,"hidetextatstart":true,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":750,"mask":{"type":"wheel","settings":[{"kind":"setting","name":"spokes","value":"1"},{"kind":"setting","name":"direction","value":"clockwise"}],"duration":750,"easing":"linear","easingdir":"easeinout"}}]}],"width":114,"height":114,"resume":true,"useHandCursor":true,"id":"5xAg8ZbMSWI","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6ZAMbs1erkS.5rjlaa68xoR"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":16,"id":"01","url":"story_content/5vJNAy3zCZj_DX232_DY232.swf","type":"normal","altText":"next-removebg-preview.png","width":148,"height":148,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":880,"yPos":616,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":46,"rotateYPos":46,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":92,"bottom":92,"altText":"next-removebg-preview.png","pngfb":false,"pr":{"l":"Lib","i":44}},"html5data":{"xPos":0,"yPos":0,"width":92,"height":92,"strokewidth":0}},"width":92,"height":92,"resume":true,"useHandCursor":true,"id":"65BPYqC6Yq7","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6jSTatqwwcJ.6jerulltyvQ"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5Zo8snoGnX1_CorrectReview","id":"01","linkId":"5Zo8snoGnX1_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":682,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":106}}}],"shapemaskId":"","xPos":0,"yPos":680,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1280,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":105}},"html5data":{"xPos":1,"yPos":1,"width":1277,"height":37,"strokewidth":2}},"width":1280,"height":40,"resume":false,"useHandCursor":true,"id":"5Zo8snoGnX1_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5Zo8snoGnX1_IncorrectReview","id":"01","linkId":"5Zo8snoGnX1_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":691,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":108}}}],"shapemaskId":"","xPos":0,"yPos":680,"tabIndex":11,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1280,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":107}},"html5data":{"xPos":1,"yPos":1,"width":1277,"height":37,"strokewidth":2}},"width":1280,"height":40,"resume":false,"useHandCursor":true,"id":"5Zo8snoGnX1_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');