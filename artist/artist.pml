<?xml version="1.0" encoding="UTF-8" ?>
<Package name="artist" format_version="4">
    <Manifest src="manifest.xml" />
    <BehaviorDescriptions>
        <BehaviorDescription name="behavior" src="behavior_1" xar="behavior.xar" />
    </BehaviorDescriptions>
    <Dialogs>
        <Dialog name="ExampleDialog" src="behavior_1/ExampleDialog/ExampleDialog.dlg" />
        <Dialog name="artist" src="artist/artist.dlg" />
        <Dialog name="general" src="general/general.dlg" />
    </Dialogs>
    <Resources>
        <File name="_metadata" src="_metadata" />
        <File name="swiftswords_ext" src="behavior_1/swiftswords_ext.mp3" />
    </Resources>
    <Topics>
        <Topic name="ExampleDialog_enu" src="behavior_1/ExampleDialog/ExampleDialog_enu.top" topicName="ExampleDialog" language="en_US" />
        <Topic name="artist_enu" src="artist/artist_enu.top" topicName="artist" language="en_US" />
        <Topic name="general_enu" src="general/general_enu.top" topicName="general" language="en_US" />
    </Topics>
    <IgnoredPaths />
</Package>
