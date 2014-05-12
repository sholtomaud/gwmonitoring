module.exports = function(app){
var views = app.views;
var action = app.actions;
var behaviours = app.behaviours;
 function createForm(){
  var GroundWaterMonitoringFormLabel = new views.Label();
  var GroundWaterMonitoringFormTextbox = new views.Textbox();
  GroundWaterMonitoringFormTextbox.size.value = 20;
  GroundWaterMonitoringFormLabel.text.value = 'Ground Water Monitoring Form ';
  GroundWaterMonitoringFormTextbox.maxLength.value = 18;
  GroundWaterMonitoringFormLabel.classes.value = 'fldname';

  GroundWaterMonitoringFormTextbox.classes.value = 'inp';

  var GroundWaterMonitoringFormLabelContainer = new views.Container();
  GroundWaterMonitoringFormLabelContainer.views.content.add([
    GroundWaterMonitoringFormLabel,
    GroundWaterMonitoringFormTextbox,
  ]);

  GroundWaterMonitoringFormLabelContainer.classes.value = 'field'
  var SiteIDLabel = new views.Label();
  var SiteIDTextbox = new views.Textbox();
  SiteIDTextbox.binding.value = '[SITE_STATION]'
  SiteIDTextbox.size.value = 20;
  SiteIDLabel.text.value = 'Site ID';
  SiteIDTextbox.maxLength.value = 18;
  SiteIDLabel.classes.value = 'fldname';

  SiteIDTextbox.classes.value = 'inp';

  var SiteIDLabelContainer = new views.Container();
  SiteIDLabelContainer.views.content.add([
    SiteIDLabel,
    SiteIDTextbox,
  ]);

  SiteIDLabelContainer.classes.value = 'field'
  var JobNameLabel = new views.Label();
  var JobNameTextbox = new views.Textbox();
  JobNameTextbox.binding.value = '[AREASMT_ASSTYPE]'
  JobNameTextbox.size.value = 7;
  JobNameLabel.text.value = 'Job Name';
  JobNameTextbox.maxLength.value = 5;
  JobNameLabel.classes.value = 'fldname';

  JobNameTextbox.classes.value = 'inp';

  var JobNameLabelContainer = new views.Container();
  JobNameLabelContainer.views.content.add([
    JobNameLabel,
    JobNameTextbox,
  ]);

  JobNameLabelContainer.classes.value = 'field'
  var BasinLabel = new views.Label();
  var BasinSelect = new views.Select();
  BasinSelect.binding.value = '[SITE_CATEGORY1]'
  BasinSelect.options.value = [''];
  BasinLabel.text.value = 'Basin';
  BasinLabel.classes.value = 'fldname';

  BasinSelect.classes.value = 'inp';

  var BasinLabelContainer = new views.Container();
  BasinLabelContainer.views.content.add([
    BasinLabel,
    BasinSelect,
  ]);

  BasinLabelContainer.classes.value = 'field'
  var WellfieldLabel = new views.Label();
  var WellfieldSelect = new views.Select();
  WellfieldSelect.binding.value = '[SITE_CATEGORY2]'
  WellfieldSelect.options.value = [''];
  WellfieldLabel.text.value = 'Wellfield';
  WellfieldLabel.classes.value = 'fldname';

  WellfieldSelect.classes.value = 'inp';

  var WellfieldLabelContainer = new views.Container();
  WellfieldLabelContainer.views.content.add([
    WellfieldLabel,
    WellfieldSelect,
  ]);

  WellfieldLabelContainer.classes.value = 'field'
  var RecordedByLabel = new views.Label();
  var RecordedByTextbox = new views.Textbox();
  RecordedByTextbox.binding.value = '[AREASMT_ASSOFFICER]'
  RecordedByTextbox.size.value = 17;
  RecordedByLabel.text.value = 'Recorded By';
  RecordedByTextbox.maxLength.value = 15;
  RecordedByLabel.classes.value = 'fldname';

  RecordedByTextbox.classes.value = 'inp';

  var RecordedByLabelContainer = new views.Container();
  RecordedByLabelContainer.views.content.add([
    RecordedByLabel,
    RecordedByTextbox,
  ]);

  RecordedByLabelContainer.classes.value = 'field'
  var DateLabel = new views.Label();
  var DateDate = new views.Textbox();
  DateDate.type.value = 'date'
  DateDate.binding.value = '[AREASMT_DATE|HYDMEAS_DATE|PUMPTEST_TESTDATE|PUMPREAD_TESTDATE|GWTRACE/SAMPLES_DATE|GWTRACER/SAMPLES_DATE]'
  DateLabel.text.value = 'Date';
  DateLabel.classes.value = 'fldname';

  DateDate.classes.value = 'inp';

  var DateLabelContainer = new views.Container();
  DateLabelContainer.views.content.add([
    DateLabel,
    DateDate,
  ]);

  DateLabelContainer.classes.value = 'field'
  var TimeLabel = new views.Label();
  var TimeTextbox = new views.Textbox();
  TimeTextbox.binding.value = '[STNVISIT_STARTTIME]'
  TimeTextbox.size.value = 6;
  TimeLabel.text.value = 'Time';
  TimeTextbox.maxLength.value = 4;
  var TimePostLabel = new views.Label();
  TimePostLabel.text.value = '(hhmm)';
  TimePostLabel.classes.value = 'postlab';

  TimeLabel.classes.value = 'fldname';

  TimeTextbox.classes.value = 'inp';

  var TimeLabelContainer = new views.Container();
  TimeLabelContainer.views.content.add([
    TimeLabel,
    TimeTextbox,
    TimePostLabel,
  ]);

  TimeLabelContainer.classes.value = 'field'
  var FreeGasReadingMethaneLabel = new views.Label();
  var FreeGasReadingMethaneTextbox = new views.Textbox();
  FreeGasReadingMethaneTextbox.binding.value = '[RESULTS_VALUE | RESULTS_VARIABLE = 1011]'
  FreeGasReadingMethaneTextbox.size.value = 17;
  FreeGasReadingMethaneLabel.text.value = 'Free Gas Reading (Methane)';
  FreeGasReadingMethaneTextbox.maxLength.value = 15;
  var FreeGasReadingMethanePostLabel = new views.Label();
  FreeGasReadingMethanePostLabel.text.value = '(ml/g)';
  FreeGasReadingMethanePostLabel.classes.value = 'postlab';

  FreeGasReadingMethaneLabel.classes.value = 'fldname';

  FreeGasReadingMethaneTextbox.classes.value = 'inp';

  var FreeGasReadingMethaneLabelContainer = new views.Container();
  FreeGasReadingMethaneLabelContainer.views.content.add([
    FreeGasReadingMethaneLabel,
    FreeGasReadingMethaneTextbox,
    FreeGasReadingMethanePostLabel,
  ]);

  FreeGasReadingMethaneLabelContainer.classes.value = 'field'
  var WellTypeLabel = new views.Label();
  var WellTypeLabel = new views.Label();
  WellTypeLabel.text.value = 'Well Type';
  WellTypeLabel.classes.value = 'fldname';

  WellTypeLabel.classes.value = 'head2';

  var WellTypeLabelContainer = new views.Container();
  WellTypeLabelContainer.views.content.add([
    WellTypeLabel,
    WellTypeLabel,
  ]);

  WellTypeLabelContainer.classes.value = 'field'
  var MonitoringLabel = new views.Label();
  var MonitoringRadio = new views.Radio();
  MonitoringRadio.binding.value = '[SITE_STNTYPE]'
  MonitoringLabel.text.value = 'Monitoring';
  MonitoringLabel.classes.value = 'fldname';

  MonitoringRadio.classes.value = 'inp';

  var MonitoringLabelContainer = new views.Container();
  MonitoringLabelContainer.views.content.add([
    MonitoringLabel,
    MonitoringRadio,
  ]);

  MonitoringLabelContainer.classes.value = 'field'
  var ExtractionLabel = new views.Label();
  var ExtractionRadio = new views.Radio();
  ExtractionRadio.binding.value = '[SITE_STNTYPE]'
  ExtractionLabel.text.value = 'Extraction';
  ExtractionLabel.classes.value = 'fldname';

  ExtractionRadio.classes.value = 'inp';

  var ExtractionLabelContainer = new views.Container();
  ExtractionLabelContainer.views.content.add([
    ExtractionLabel,
    ExtractionRadio,
  ]);

  ExtractionLabelContainer.classes.value = 'field'
  var OtherLabel = new views.Label();
  var OtherRadio = new views.Radio();
  OtherRadio.binding.value = '[SITE_STNTYPE]'
  OtherLabel.text.value = 'Other';
  OtherLabel.classes.value = 'fldname';

  OtherRadio.classes.value = 'inp';

  var OtherLabelContainer = new views.Container();
  OtherLabelContainer.views.content.add([
    OtherLabel,
    OtherRadio,
  ]);

  OtherLabelContainer.classes.value = 'field'
  var WellMaterialLabel = new views.Label();
  var WellMaterialLabel = new views.Label();
  WellMaterialLabel.text.value = 'Well Material';
  WellMaterialLabel.classes.value = 'fldname';

  WellMaterialLabel.classes.value = 'head2';

  var WellMaterialLabelContainer = new views.Container();
  WellMaterialLabelContainer.views.content.add([
    WellMaterialLabel,
    WellMaterialLabel,
  ]);

  WellMaterialLabelContainer.classes.value = 'field'
  var PVCLabel = new views.Label();
  var PVCRadio = new views.Radio();
  PVCRadio.binding.value = '[CASING_CASETYPE]'
  PVCLabel.text.value = 'PVC';
  PVCLabel.classes.value = 'fldname';

  PVCRadio.classes.value = 'inp';

  var PVCLabelContainer = new views.Container();
  PVCLabelContainer.views.content.add([
    PVCLabel,
    PVCRadio,
  ]);

  PVCLabelContainer.classes.value = 'field'
  var SteelLabel = new views.Label();
  var SteelRadio = new views.Radio();
  SteelRadio.binding.value = '[CASING_CASETYPE]'
  SteelLabel.text.value = 'Steel';
  SteelLabel.classes.value = 'fldname';

  SteelRadio.classes.value = 'inp';

  var SteelLabelContainer = new views.Container();
  SteelLabelContainer.views.content.add([
    SteelLabel,
    SteelRadio,
  ]);

  SteelLabelContainer.classes.value = 'field'
  var OtherLabel = new views.Label();
  var OtherRadio = new views.Radio();
  OtherRadio.binding.value = '[CASING_CASETYPE]'
  OtherLabel.text.value = 'Other';
  OtherLabel.classes.value = 'fldname';

  OtherRadio.classes.value = 'inp';

  var OtherLabelContainer = new views.Container();
  OtherLabelContainer.views.content.add([
    OtherLabel,
    OtherRadio,
  ]);

  OtherLabelContainer.classes.value = 'field'
  var PurgeSetupLabel = new views.Label();
  var PurgeSetupLabel = new views.Label();
  PurgeSetupLabel.text.value = 'Purge Setup';
  PurgeSetupLabel.classes.value = 'fldname';

  PurgeSetupLabel.classes.value = 'head2';

  var PurgeSetupLabelContainer = new views.Container();
  PurgeSetupLabelContainer.views.content.add([
    PurgeSetupLabel,
    PurgeSetupLabel,
  ]);

  PurgeSetupLabelContainer.classes.value = 'field'
  var WellHeadConditionLabel = new views.Label();
  var WellHeadConditionTextbox = new views.Textbox();
  WellHeadConditionTextbox.binding.value = '[HYDRLMP_COMMENT]'
  WellHeadConditionTextbox.size.value = 32;
  WellHeadConditionLabel.text.value = 'Well Head Condition';
  WellHeadConditionTextbox.maxLength.value = 60;
  WellHeadConditionLabel.classes.value = 'fldname';

  WellHeadConditionTextbox.classes.value = 'inp';

  var WellHeadConditionLabelContainer = new views.Container();
  WellHeadConditionLabelContainer.views.content.add([
    WellHeadConditionLabel,
    WellHeadConditionTextbox,
  ]);

  WellHeadConditionLabelContainer.classes.value = 'field'
  var WaterLevelDepthLabel = new views.Label();
  var WaterLevelDepthTextbox = new views.Textbox();
  WaterLevelDepthTextbox.binding.value = '[HYDMEAS_VALUE | HYDMEAS_VARIABLE = 110 ]'
  WaterLevelDepthTextbox.size.value = 12;
  WaterLevelDepthLabel.text.value = 'Water Level Depth ';
  WaterLevelDepthTextbox.maxLength.value = 15;
  var WaterLevelDepthPostLabel = new views.Label();
  WaterLevelDepthPostLabel.text.value = '(WL in m BTOC)';
  WaterLevelDepthPostLabel.classes.value = 'postlab';

  WaterLevelDepthLabel.classes.value = 'fldname';

  WaterLevelDepthTextbox.classes.value = 'inp';

  var WaterLevelDepthLabelContainer = new views.Container();
  WaterLevelDepthLabelContainer.views.content.add([
    WaterLevelDepthLabel,
    WaterLevelDepthTextbox,
    WaterLevelDepthPostLabel,
  ]);

  WaterLevelDepthLabelContainer.classes.value = 'field'
  var MeasurementPointDescriptionLabel = new views.Label();
  var MeasurementPointDescriptionTextbox = new views.Textbox();
  MeasurementPointDescriptionTextbox.binding.value = '[HYDRLMP_MEASPTDESC  ]'
  MeasurementPointDescriptionTextbox.size.value = 62;
  MeasurementPointDescriptionLabel.text.value = 'Measurement Point Description';
  MeasurementPointDescriptionTextbox.maxLength.value = 60;
  MeasurementPointDescriptionLabel.classes.value = 'fldname';

  MeasurementPointDescriptionTextbox.classes.value = 'inp';

  var MeasurementPointDescriptionLabelContainer = new views.Container();
  MeasurementPointDescriptionLabelContainer.views.content.add([
    MeasurementPointDescriptionLabel,
    MeasurementPointDescriptionTextbox,
  ]);

  MeasurementPointDescriptionLabelContainer.classes.value = 'field'
  var TotalDepthofWellLabel = new views.Label();
  var TotalDepthofWellTextbox = new views.Textbox();
  TotalDepthofWellTextbox.binding.value = '[GWHOLE_DEPTHDRILL]'
  TotalDepthofWellLabel.text.value = 'Total Depth of Well ';
  var TotalDepthofWellPostLabel = new views.Label();
  TotalDepthofWellPostLabel.text.value = '(TD in m BTOC)';
  TotalDepthofWellPostLabel.classes.value = 'postlab';

  TotalDepthofWellLabel.classes.value = 'fldname';

  TotalDepthofWellTextbox.classes.value = 'inp';

  var TotalDepthofWellLabelContainer = new views.Container();
  TotalDepthofWellLabelContainer.views.content.add([
    TotalDepthofWellLabel,
    TotalDepthofWellTextbox,
    TotalDepthofWellPostLabel,
  ]);

  TotalDepthofWellLabelContainer.classes.value = 'field'
  var WellDiameterLabel = new views.Label();
  var WellDiameterTextbox = new views.Textbox();
  WellDiameterTextbox.binding.value = '[CASING_OUTDIAM|CASING_DEPTHFROM=0_00]'
  WellDiameterTextbox.size.value = 17;
  WellDiameterLabel.text.value = 'Well Diameter ';
  WellDiameterTextbox.maxLength.value = 15;
  var WellDiameterPostLabel = new views.Label();
  WellDiameterPostLabel.text.value = '(D in mm)';
  WellDiameterPostLabel.classes.value = 'postlab';

  WellDiameterLabel.classes.value = 'fldname';

  WellDiameterTextbox.classes.value = 'inp';

  var WellDiameterLabelContainer = new views.Container();
  WellDiameterLabelContainer.views.content.add([
    WellDiameterLabel,
    WellDiameterTextbox,
    WellDiameterPostLabel,
  ]);

  WellDiameterLabelContainer.classes.value = 'field'
  var BailerTypeLabel = new views.Label();
  var BailerTypeLabel = new views.Label();
  BailerTypeLabel.text.value = 'Bailer Type';
  BailerTypeLabel.classes.value = 'fldname';

  BailerTypeLabel.classes.value = 'head3';

  var BailerTypeLabelContainer = new views.Container();
  BailerTypeLabelContainer.views.content.add([
    BailerTypeLabel,
    BailerTypeLabel,
  ]);

  BailerTypeLabelContainer.classes.value = 'field'
  var PVCLabel = new views.Label();
  var PVCRadio = new views.Radio();
  PVCRadio.binding.value = '[PUMPTTEST_COMMENTS ]'
  PVCLabel.text.value = 'PVC';
  PVCLabel.classes.value = 'fldname';

  PVCRadio.classes.value = 'inp';

  var PVCLabelContainer = new views.Container();
  PVCLabelContainer.views.content.add([
    PVCLabel,
    PVCRadio,
  ]);

  PVCLabelContainer.classes.value = 'field'
  var SteelLabel = new views.Label();
  var SteelRadio = new views.Radio();
  SteelRadio.binding.value = '[PUMPTTEST_COMMENTS ]'
  SteelLabel.text.value = 'Steel';
  SteelLabel.classes.value = 'fldname';

  SteelRadio.classes.value = 'inp';

  var SteelLabelContainer = new views.Container();
  SteelLabelContainer.views.content.add([
    SteelLabel,
    SteelRadio,
  ]);

  SteelLabelContainer.classes.value = 'field'
  var TeflonLabel = new views.Label();
  var TeflonRadio = new views.Radio();
  TeflonRadio.binding.value = '[PUMPTTEST_COMMENTS ]'
  TeflonLabel.text.value = 'Teflon';
  TeflonLabel.classes.value = 'fldname';

  TeflonRadio.classes.value = 'inp';

  var TeflonLabelContainer = new views.Container();
  TeflonLabelContainer.views.content.add([
    TeflonLabel,
    TeflonRadio,
  ]);

  TeflonLabelContainer.classes.value = 'field'
  var OtherLabel = new views.Label();
  var OtherRadio = new views.Radio();
  OtherRadio.binding.value = '[PUMPTTEST_COMMENTS ]'
  OtherLabel.text.value = 'Other';
  OtherLabel.classes.value = 'fldname';

  OtherRadio.classes.value = 'inp';

  var OtherLabelContainer = new views.Container();
  OtherLabelContainer.views.content.add([
    OtherLabel,
    OtherRadio,
  ]);

  OtherLabelContainer.classes.value = 'field'
  var PumpTypeLabel = new views.Label();
  var PumpTypeLabel = new views.Label();
  PumpTypeLabel.text.value = 'Pump Type';
  PumpTypeLabel.classes.value = 'fldname';

  PumpTypeLabel.classes.value = 'head3';

  var PumpTypeLabelContainer = new views.Container();
  PumpTypeLabelContainer.views.content.add([
    PumpTypeLabel,
    PumpTypeLabel,
  ]);

  PumpTypeLabelContainer.classes.value = 'field'
  var SubmersibleLabel = new views.Label();
  var SubmersibleRadio = new views.Radio();
  SubmersibleLabel.text.value = 'Submersible';
  SubmersibleLabel.classes.value = 'fldname';

  SubmersibleRadio.classes.value = 'inp';

  var SubmersibleLabelContainer = new views.Container();
  SubmersibleLabelContainer.views.content.add([
    SubmersibleLabel,
    SubmersibleRadio,
  ]);

  SubmersibleLabelContainer.classes.value = 'field'
  var BladderLabel = new views.Label();
  var BladderRadio = new views.Radio();
  BladderRadio.binding.value = '[PUMPTTEST_COMMENTS]'
  BladderLabel.text.value = 'Bladder';
  BladderLabel.classes.value = 'fldname';

  BladderRadio.classes.value = 'inp';

  var BladderLabelContainer = new views.Container();
  BladderLabelContainer.views.content.add([
    BladderLabel,
    BladderRadio,
  ]);

  BladderLabelContainer.classes.value = 'field'
  var OtherLabel = new views.Label();
  var OtherRadio = new views.Radio();
  OtherRadio.binding.value = '[PUMPTTEST_COMMENTS]'
  OtherLabel.text.value = 'Other';
  OtherLabel.classes.value = 'fldname';

  OtherRadio.classes.value = 'inp';

  var OtherLabelContainer = new views.Container();
  OtherLabelContainer.views.content.add([
    OtherLabel,
    OtherRadio,
  ]);

  OtherLabelContainer.classes.value = 'field'
  var NotesLabel = new views.Label();
  var NotesTextarea = new views.Textarea();
  NotesTextarea.binding.value = '[PUMPTTEST_COMMENTS]'
  NotesLabel.text.value = 'Notes';
  NotesLabel.classes.value = 'fldname';

  NotesTextarea.classes.value = 'inp';

  var NotesLabelContainer = new views.Container();
  NotesLabelContainer.views.content.add([
    NotesLabel,
    NotesTextarea,
  ]);

  NotesLabelContainer.classes.value = 'field'
  var PumpIntakeSettingLabel = new views.Label();
  var PumpIntakeSettingLabel = new views.Label();
  PumpIntakeSettingLabel.text.value = 'Pump Intake Setting';
  PumpIntakeSettingLabel.classes.value = 'fldname';

  PumpIntakeSettingLabel.classes.value = 'head3';

  var PumpIntakeSettingLabelContainer = new views.Container();
  PumpIntakeSettingLabelContainer.views.content.add([
    PumpIntakeSettingLabel,
    PumpIntakeSettingLabel,
  ]);

  PumpIntakeSettingLabelContainer.classes.value = 'field'
  var DepthLabel = new views.Label();
  var DepthTextbox = new views.Textbox();
  DepthTextbox.binding.value = '[PUMPTEST_PUMPDEPTH]'
  DepthTextbox.size.value = 8;
  DepthLabel.text.value = 'Depth ';
  DepthTextbox.maxLength.value = 6;
  var DepthPostLabel = new views.Label();
  DepthPostLabel.text.value = '(m BTOC)';
  DepthPostLabel.classes.value = 'postlab';

  DepthLabel.classes.value = 'fldname';

  DepthTextbox.classes.value = 'inp';

  var DepthLabelContainer = new views.Container();
  DepthLabelContainer.views.content.add([
    DepthLabel,
    DepthTextbox,
    DepthPostLabel,
  ]);

  DepthLabelContainer.classes.value = 'field'
  var FieldParameterMeasurementsLabel = new views.Label();
  var FieldParameterMeasurementsLabel = new views.Label();
  FieldParameterMeasurementsLabel.text.value = 'Field Parameter Measurements';
  FieldParameterMeasurementsLabel.classes.value = 'fldname';

  FieldParameterMeasurementsLabel.classes.value = 'head3';

  var FieldParameterMeasurementsLabelContainer = new views.Container();
  FieldParameterMeasurementsLabelContainer.views.content.add([
    FieldParameterMeasurementsLabel,
    FieldParameterMeasurementsLabel,
  ]);

  FieldParameterMeasurementsLabelContainer.classes.value = 'field'
  var TimeLabel = new views.Label();
  var TimeTextbox = new views.Textbox();
  TimeTextbox.binding.value = '[PUMPTEST_TIME]'
  TimeTextbox.size.value = 6;
  TimeLabel.text.value = 'Time';
  TimeTextbox.maxLength.value = 4;
  var TimePostLabel = new views.Label();
  TimePostLabel.text.value = '(hhmm)';
  TimePostLabel.classes.value = 'postlab';

  TimeLabel.classes.value = 'fldname';

  TimeTextbox.classes.value = 'inp';

  var TimeLabelContainer = new views.Container();
  TimeLabelContainer.views.content.add([
    TimeLabel,
    TimeTextbox,
    TimePostLabel,
  ]);

  TimeLabelContainer.classes.value = 'field'
  var VolumePurgedLabel = new views.Label();
  var VolumePurgedTextbox = new views.Textbox();
  VolumePurgedTextbox.binding.value = '[PUMPTEST_SPARE3]'
  VolumePurgedLabel.text.value = 'Volume Purged';
  var VolumePurgedPostLabel = new views.Label();
  VolumePurgedPostLabel.text.value = '(L)';
  VolumePurgedPostLabel.classes.value = 'postlab';

  VolumePurgedLabel.classes.value = 'fldname';

  VolumePurgedTextbox.classes.value = 'inp';

  var VolumePurgedLabelContainer = new views.Container();
  VolumePurgedLabelContainer.views.content.add([
    VolumePurgedLabel,
    VolumePurgedTextbox,
    VolumePurgedPostLabel,
  ]);

  VolumePurgedLabelContainer.classes.value = 'field'
  var DOLabel = new views.Label();
  var DOTextbox = new views.Textbox();
  DOTextbox.binding.value = '[RESULTS_VALUE | RESULTS_VARIABLE = 110]'
  DOTextbox.size.value = 17;
  DOLabel.text.value = 'DO ';
  DOTextbox.maxLength.value = 15;
  var DOPostLabel = new views.Label();
  DOPostLabel.text.value = '(mg/L)';
  DOPostLabel.classes.value = 'postlab';

  DOLabel.classes.value = 'fldname';

  DOTextbox.classes.value = 'inp';

  var DOLabelContainer = new views.Container();
  DOLabelContainer.views.content.add([
    DOLabel,
    DOTextbox,
    DOPostLabel,
  ]);

  DOLabelContainer.classes.value = 'field'
  var DOppmLabel = new views.Label();
  var DOppmTextbox = new views.Textbox();
  DOppmTextbox.binding.value = '[RESULTS_VALUE | RESULTS_VARIABLE = 110]'
  DOppmTextbox.size.value = 17;
  DOppmLabel.text.value = 'DO ppm';
  DOppmTextbox.maxLength.value = 15;
  var DOppmPostLabel = new views.Label();
  DOppmPostLabel.text.value = '(ppm)';
  DOppmPostLabel.classes.value = 'postlab';

  DOppmLabel.classes.value = 'fldname';

  DOppmTextbox.classes.value = 'inp';

  var DOppmLabelContainer = new views.Container();
  DOppmLabelContainer.views.content.add([
    DOppmLabel,
    DOppmTextbox,
    DOppmPostLabel,
  ]);

  DOppmLabelContainer.classes.value = 'field'
  var ElectricalCondutivitiyLabel = new views.Label();
  var ElectricalCondutivitiyTextbox = new views.Textbox();
  ElectricalCondutivitiyTextbox.binding.value = '[RESULTS_VALUE | RESULTS_VARIABLE = 110]'
  ElectricalCondutivitiyTextbox.size.value = 17;
  ElectricalCondutivitiyLabel.text.value = 'Electrical Condutivitiy ';
  ElectricalCondutivitiyTextbox.maxLength.value = 15;
  var ElectricalCondutivitiyPostLabel = new views.Label();
  ElectricalCondutivitiyPostLabel.text.value = '(mS/cm)';
  ElectricalCondutivitiyPostLabel.classes.value = 'postlab';

  ElectricalCondutivitiyLabel.classes.value = 'fldname';

  ElectricalCondutivitiyTextbox.classes.value = 'inp';

  var ElectricalCondutivitiyLabelContainer = new views.Container();
  ElectricalCondutivitiyLabelContainer.views.content.add([
    ElectricalCondutivitiyLabel,
    ElectricalCondutivitiyTextbox,
    ElectricalCondutivitiyPostLabel,
  ]);

  ElectricalCondutivitiyLabelContainer.classes.value = 'field'
  var ElectricalCondutivitiyLabel = new views.Label();
  var ElectricalCondutivitiyTextbox = new views.Textbox();
  ElectricalCondutivitiyTextbox.binding.value = '[RESULTS_VALUE | RESULTS_VARIABLE = 110]'
  ElectricalCondutivitiyTextbox.size.value = 17;
  ElectricalCondutivitiyLabel.text.value = 'Electrical Condutivitiy ';
  ElectricalCondutivitiyTextbox.maxLength.value = 15;
  var ElectricalCondutivitiyPostLabel = new views.Label();
  ElectricalCondutivitiyPostLabel.text.value = '(ms per cm)';
  ElectricalCondutivitiyPostLabel.classes.value = 'postlab';

  ElectricalCondutivitiyLabel.classes.value = 'fldname';

  ElectricalCondutivitiyTextbox.classes.value = 'inp';

  var ElectricalCondutivitiyLabelContainer = new views.Container();
  ElectricalCondutivitiyLabelContainer.views.content.add([
    ElectricalCondutivitiyLabel,
    ElectricalCondutivitiyTextbox,
    ElectricalCondutivitiyPostLabel,
  ]);

  ElectricalCondutivitiyLabelContainer.classes.value = 'field'
  var pHLabel = new views.Label();
  var pHTextbox = new views.Textbox();
  pHTextbox.binding.value = '[RESULTS_VALUE | RESULTS_VARIABLE = 110]'
  pHTextbox.size.value = 17;
  pHLabel.text.value = 'pH';
  pHTextbox.maxLength.value = 15;
  pHLabel.classes.value = 'fldname';

  pHTextbox.classes.value = 'inp';

  var pHLabelContainer = new views.Container();
  pHLabelContainer.views.content.add([
    pHLabel,
    pHTextbox,
  ]);

  pHLabelContainer.classes.value = 'field'
  var RedOxLabel = new views.Label();
  var RedOxTextbox = new views.Textbox();
  RedOxTextbox.binding.value = '[RESULTS_VALUE | RESULTS_VARIABLE = 110]'
  RedOxTextbox.size.value = 17;
  RedOxLabel.text.value = 'RedOx ';
  RedOxTextbox.maxLength.value = 15;
  var RedOxPostLabel = new views.Label();
  RedOxPostLabel.text.value = '(mV)';
  RedOxPostLabel.classes.value = 'postlab';

  RedOxLabel.classes.value = 'fldname';

  RedOxTextbox.classes.value = 'inp';

  var RedOxLabelContainer = new views.Container();
  RedOxLabelContainer.views.content.add([
    RedOxLabel,
    RedOxTextbox,
    RedOxPostLabel,
  ]);

  RedOxLabelContainer.classes.value = 'field'
  var TempLabel = new views.Label();
  var TempTextbox = new views.Textbox();
  TempTextbox.binding.value = '[RESULTS_VALUE | RESULTS_VARIABLE = 110]'
  TempTextbox.size.value = 17;
  TempLabel.text.value = 'Temp ';
  TempTextbox.maxLength.value = 15;
  var TempPostLabel = new views.Label();
  TempPostLabel.text.value = '(�C)';
  TempPostLabel.classes.value = 'postlab';

  TempLabel.classes.value = 'fldname';

  TempTextbox.classes.value = 'inp';

  var TempLabelContainer = new views.Container();
  TempLabelContainer.views.content.add([
    TempLabel,
    TempTextbox,
    TempPostLabel,
  ]);

  TempLabelContainer.classes.value = 'field'
  var TurbidityLabel = new views.Label();
  var TurbidityTextbox = new views.Textbox();
  TurbidityTextbox.binding.value = '[RESULTS_VALUE | RESULTS_VARIABLE = 110]'
  TurbidityTextbox.size.value = 17;
  TurbidityLabel.text.value = 'Turbidity ';
  TurbidityTextbox.maxLength.value = 15;
  var TurbidityPostLabel = new views.Label();
  TurbidityPostLabel.text.value = '(NTU)';
  TurbidityPostLabel.classes.value = 'postlab';

  TurbidityLabel.classes.value = 'fldname';

  TurbidityTextbox.classes.value = 'inp';

  var TurbidityLabelContainer = new views.Container();
  TurbidityLabelContainer.views.content.add([
    TurbidityLabel,
    TurbidityTextbox,
    TurbidityPostLabel,
  ]);

  TurbidityLabelContainer.classes.value = 'field'
  var MeasurementCommentsLabel = new views.Label();
  var MeasurementCommentsTextarea = new views.Textarea();
  MeasurementCommentsTextarea.binding.value = '[SAMPLE_COMMNT]'
  MeasurementCommentsLabel.text.value = 'Measurement Comments';
  MeasurementCommentsLabel.classes.value = 'fldname';

  MeasurementCommentsTextarea.classes.value = 'inp';

  var MeasurementCommentsLabelContainer = new views.Container();
  MeasurementCommentsLabelContainer.views.content.add([
    MeasurementCommentsLabel,
    MeasurementCommentsTextarea,
  ]);

  MeasurementCommentsLabelContainer.classes.value = 'field'
  var DischargewaterdisposalLabel = new views.Label();
  var DischargewaterdisposalLabel = new views.Label();
  DischargewaterdisposalLabel.text.value = 'Discharge water disposal';
  DischargewaterdisposalLabel.classes.value = 'fldname';

  DischargewaterdisposalLabel.classes.value = 'head3';

  var DischargewaterdisposalLabelContainer = new views.Container();
  DischargewaterdisposalLabelContainer.views.content.add([
    DischargewaterdisposalLabel,
    DischargewaterdisposalLabel,
  ]);

  DischargewaterdisposalLabelContainer.classes.value = 'field'
  var DrumsLabel = new views.Label();
  var DrumsRadio = new views.Radio();
  DrumsRadio.binding.value = '[SAMPLE_SPARE2 | SAMPLE_SAMPTYPE = DISCH]'
  DrumsLabel.text.value = 'Drums';
  DrumsLabel.classes.value = 'fldname';

  DrumsRadio.classes.value = 'inp';

  var DrumsLabelContainer = new views.Container();
  DrumsLabelContainer.views.content.add([
    DrumsLabel,
    DrumsRadio,
  ]);

  DrumsLabelContainer.classes.value = 'field'
  var SanitaryLabel = new views.Label();
  var SanitaryRadio = new views.Radio();
  SanitaryRadio.binding.value = '[SAMPLE_SPARE2 | SAMPLE_SAMPTYPE = DISCH]'
  SanitaryLabel.text.value = 'Sanitary';
  SanitaryLabel.classes.value = 'fldname';

  SanitaryRadio.classes.value = 'inp';

  var SanitaryLabelContainer = new views.Container();
  SanitaryLabelContainer.views.content.add([
    SanitaryLabel,
    SanitaryRadio,
  ]);

  SanitaryLabelContainer.classes.value = 'field'
  var SewerStormLabel = new views.Label();
  var SewerStormRadio = new views.Radio();
  SewerStormRadio.binding.value = '[SAMPLE_SPARE2 | SAMPLE_SAMPTYPE = DISCH]'
  SewerStormLabel.text.value = 'Sewer Storm';
  SewerStormLabel.classes.value = 'fldname';

  SewerStormRadio.classes.value = 'inp';

  var SewerStormLabelContainer = new views.Container();
  SewerStormLabelContainer.views.content.add([
    SewerStormLabel,
    SewerStormRadio,
  ]);

  SewerStormLabelContainer.classes.value = 'field'
  var SewerLabel = new views.Label();
  var SewerRadio = new views.Radio();
  SewerRadio.binding.value = '[SAMPLE_SPARE2 | SAMPLE_SAMPTYPE = DISCH]'
  SewerLabel.text.value = 'Sewer';
  SewerLabel.classes.value = 'fldname';

  SewerRadio.classes.value = 'inp';

  var SewerLabelContainer = new views.Container();
  SewerLabelContainer.views.content.add([
    SewerLabel,
    SewerRadio,
  ]);

  SewerLabelContainer.classes.value = 'field'
  var OtherLabel = new views.Label();
  var OtherRadio = new views.Radio();
  OtherRadio.binding.value = '[SAMPLE_SPARE2 | SAMPLE_SAMPTYPE = DISCH]'
  OtherLabel.text.value = 'Other';
  OtherLabel.classes.value = 'fldname';

  OtherRadio.classes.value = 'inp';

  var OtherLabelContainer = new views.Container();
  OtherLabelContainer.views.content.add([
    OtherLabel,
    OtherRadio,
  ]);

  OtherLabelContainer.classes.value = 'field'
  var OtherCommentLabel = new views.Label();
  var OtherCommentTextarea = new views.Textarea();
  OtherCommentTextarea.binding.value = '[SAMPLE_COMMNT]'
  OtherCommentLabel.text.value = 'Other Comment';
  OtherCommentLabel.classes.value = 'fldname';

  OtherCommentTextarea.classes.value = 'inp';

  var OtherCommentLabelContainer = new views.Container();
  OtherCommentLabelContainer.views.content.add([
    OtherCommentLabel,
    OtherCommentTextarea,
  ]);

  OtherCommentLabelContainer.classes.value = 'field'
  var WellSamplingLabel = new views.Label();
  var WellSamplingLabel = new views.Label();
  WellSamplingLabel.binding.value = '[PUMPTEST_COMMENT]'
  WellSamplingLabel.text.value = 'Well Sampling ';
  WellSamplingLabel.classes.value = 'fldname';

  WellSamplingLabel.classes.value = 'SubHeading';

  var WellSamplingLabelContainer = new views.Container();
  WellSamplingLabelContainer.views.content.add([
    WellSamplingLabel,
    WellSamplingLabel,
  ]);

  WellSamplingLabelContainer.classes.value = 'field'
  var SampleTakenLabel = new views.Label();
  var SampleTakenCheckbox = new views.Checkbox();
  SampleTakenCheckbox.binding.value = '[AREASMT_SAMPFLAG]'
  SampleTakenLabel.text.value = 'Sample Taken';
  SampleTakenLabel.classes.value = 'fldname';

  SampleTakenCheckbox.classes.value = 'inp';

  var SampleTakenLabelContainer = new views.Container();
  SampleTakenLabelContainer.views.content.add([
    SampleTakenLabel,
    SampleTakenCheckbox,
  ]);

  SampleTakenLabelContainer.classes.value = 'field'
  var SamplingMethodLabel = new views.Label();
  var SamplingMethodSelect = new views.Select();
  SamplingMethodSelect.binding.value = '[SAMPLES_COLLMETH]'
  SamplingMethodSelect.options.value = ['AI','AS','PA'];
  SamplingMethodLabel.text.value = 'Sampling Method';
  SamplingMethodLabel.classes.value = 'fldname';

  SamplingMethodSelect.classes.value = 'inp';

  var SamplingMethodLabelContainer = new views.Container();
  SamplingMethodLabelContainer.views.content.add([
    SamplingMethodLabel,
    SamplingMethodSelect,
  ]);

  SamplingMethodLabelContainer.classes.value = 'field'
  var BOTTLENUMBERLabel = new views.Label();
  var BOTTLENUMBERTextbox = new views.Textbox();
  BOTTLENUMBERTextbox.binding.value = '[SAMPLES_BOTTLE]'
  BOTTLENUMBERTextbox.size.value = 22;
  BOTTLENUMBERLabel.text.value = 'BOTTLE NUMBER';
  BOTTLENUMBERTextbox.maxLength.value = 20;
  BOTTLENUMBERLabel.classes.value = 'fldname';

  BOTTLENUMBERTextbox.classes.value = 'inp';

  var BOTTLENUMBERLabelContainer = new views.Container();
  BOTTLENUMBERLabelContainer.views.content.add([
    BOTTLENUMBERLabel,
    BOTTLENUMBERTextbox,
  ]);

  BOTTLENUMBERLabelContainer.classes.value = 'field'
  var SAMPLENUMBERLabel = new views.Label();
  var SAMPLENUMBERTextbox = new views.Textbox();
  SAMPLENUMBERTextbox.binding.value = '[SAMPLES_SAMPNUM]'
  SAMPLENUMBERTextbox.size.value = 32;
  SAMPLENUMBERLabel.text.value = 'SAMPLE NUMBER';
  SAMPLENUMBERTextbox.maxLength.value = 30;
  SAMPLENUMBERLabel.classes.value = 'fldname';

  SAMPLENUMBERTextbox.classes.value = 'inp';

  var SAMPLENUMBERLabelContainer = new views.Container();
  SAMPLENUMBERLabelContainer.views.content.add([
    SAMPLENUMBERLabel,
    SAMPLENUMBERTextbox,
  ]);

  SAMPLENUMBERLabelContainer.classes.value = 'field'
  var BOTTLETYPELabel = new views.Label();
  var BOTTLETYPESelect = new views.Select();
  BOTTLETYPESelect.binding.value = '[SAMPLES_SPARE2]'
  BOTTLETYPESelect.options.value = ['amber glass','plastic'];
  BOTTLETYPELabel.text.value = 'BOTTLE TYPE';
  BOTTLETYPELabel.classes.value = 'fldname';

  BOTTLETYPESelect.classes.value = 'inp';

  var BOTTLETYPELabelContainer = new views.Container();
  BOTTLETYPELabelContainer.views.content.add([
    BOTTLETYPELabel,
    BOTTLETYPESelect,
  ]);

  BOTTLETYPELabelContainer.classes.value = 'field'
  var SampleTypeLabel = new views.Label();
  var SampleTypeLabel = new views.Label();
  SampleTypeLabel.text.value = 'Sample Type';
  SampleTypeLabel.classes.value = 'fldname';

  SampleTypeLabel.classes.value = 'head3';

  var SampleTypeLabelContainer = new views.Container();
  SampleTypeLabelContainer.views.content.add([
    SampleTypeLabel,
    SampleTypeLabel,
  ]);

  SampleTypeLabelContainer.classes.value = 'field'
  var PRIMARYLabel = new views.Label();
  var PRIMARYRadio = new views.Radio();
  PRIMARYRadio.binding.value = '[SAMPLES_SAMPTYPE]'
  PRIMARYLabel.text.value = 'PRIMARY';
  PRIMARYLabel.classes.value = 'fldname';

  PRIMARYRadio.classes.value = 'inp';

  var PRIMARYLabelContainer = new views.Container();
  PRIMARYLabelContainer.views.content.add([
    PRIMARYLabel,
    PRIMARYRadio,
  ]);

  PRIMARYLabelContainer.classes.value = 'field'
  var DUPE1Label = new views.Label();
  var DUPE1Radio = new views.Radio();
  DUPE1Radio.binding.value = '[SAMPLES_SAMPTYPE]'
  DUPE1Label.text.value = 'DUPE1';
  DUPE1Label.classes.value = 'fldname';

  DUPE1Radio.classes.value = 'inp';

  var DUPE1LabelContainer = new views.Container();
  DUPE1LabelContainer.views.content.add([
    DUPE1Label,
    DUPE1Radio,
  ]);

  DUPE1LabelContainer.classes.value = 'field'
  var DUPE2Label = new views.Label();
  var DUPE2Radio = new views.Radio();
  DUPE2Radio.binding.value = '[SAMPLES_SAMPTYPE]'
  DUPE2Label.text.value = 'DUPE2';
  DUPE2Label.classes.value = 'fldname';

  DUPE2Radio.classes.value = 'inp';

  var DUPE2LabelContainer = new views.Container();
  DUPE2LabelContainer.views.content.add([
    DUPE2Label,
    DUPE2Radio,
  ]);

  DUPE2LabelContainer.classes.value = 'field'
  var DUPE3Label = new views.Label();
  var DUPE3Radio = new views.Radio();
  DUPE3Radio.binding.value = '[SAMPLES_SAMPTYPE]'
  DUPE3Label.text.value = 'DUPE3';
  DUPE3Label.classes.value = 'fldname';

  DUPE3Radio.classes.value = 'inp';

  var DUPE3LabelContainer = new views.Container();
  DUPE3LabelContainer.views.content.add([
    DUPE3Label,
    DUPE3Radio,
  ]);

  DUPE3LabelContainer.classes.value = 'field'
  var TRIPCLICATE1Label = new views.Label();
  var TRIPCLICATE1Radio = new views.Radio();
  TRIPCLICATE1Radio.binding.value = '[SAMPLES_SAMPTYPE]'
  TRIPCLICATE1Label.text.value = 'TRIPCLICATE1';
  TRIPCLICATE1Label.classes.value = 'fldname';

  TRIPCLICATE1Radio.classes.value = 'inp';

  var TRIPCLICATE1LabelContainer = new views.Container();
  TRIPCLICATE1LabelContainer.views.content.add([
    TRIPCLICATE1Label,
    TRIPCLICATE1Radio,
  ]);

  TRIPCLICATE1LabelContainer.classes.value = 'field'
  var TRIPCLICATE2Label = new views.Label();
  var TRIPCLICATE2Radio = new views.Radio();
  TRIPCLICATE2Radio.binding.value = '[SAMPLES_SAMPTYPE]'
  TRIPCLICATE2Label.text.value = 'TRIPCLICATE2';
  TRIPCLICATE2Label.classes.value = 'fldname';

  TRIPCLICATE2Radio.classes.value = 'inp';

  var TRIPCLICATE2LabelContainer = new views.Container();
  TRIPCLICATE2LabelContainer.views.content.add([
    TRIPCLICATE2Label,
    TRIPCLICATE2Radio,
  ]);

  TRIPCLICATE2LabelContainer.classes.value = 'field'
  var TRIPCLICATE3Label = new views.Label();
  var TRIPCLICATE3Radio = new views.Radio();
  TRIPCLICATE3Radio.binding.value = '[SAMPLES_SAMPTYPE]'
  TRIPCLICATE3Label.text.value = 'TRIPCLICATE3';
  TRIPCLICATE3Label.classes.value = 'fldname';

  TRIPCLICATE3Radio.classes.value = 'inp';

  var TRIPCLICATE3LabelContainer = new views.Container();
  TRIPCLICATE3LabelContainer.views.content.add([
    TRIPCLICATE3Label,
    TRIPCLICATE3Radio,
  ]);

  TRIPCLICATE3LabelContainer.classes.value = 'field'
  var RINSATE1Label = new views.Label();
  var RINSATE1Radio = new views.Radio();
  RINSATE1Radio.binding.value = '[SAMPLES_SAMPTYPE]'
  RINSATE1Label.text.value = 'RINSATE1';
  RINSATE1Label.classes.value = 'fldname';

  RINSATE1Radio.classes.value = 'inp';

  var RINSATE1LabelContainer = new views.Container();
  RINSATE1LabelContainer.views.content.add([
    RINSATE1Label,
    RINSATE1Radio,
  ]);

  RINSATE1LabelContainer.classes.value = 'field'
  var RINSATE2Label = new views.Label();
  var RINSATE2Radio = new views.Radio();
  RINSATE2Radio.binding.value = '[SAMPLES_SAMPTYPE]'
  RINSATE2Label.text.value = 'RINSATE2';
  RINSATE2Label.classes.value = 'fldname';

  RINSATE2Radio.classes.value = 'inp';

  var RINSATE2LabelContainer = new views.Container();
  RINSATE2LabelContainer.views.content.add([
    RINSATE2Label,
    RINSATE2Radio,
  ]);

  RINSATE2LabelContainer.classes.value = 'field'
  var RINSATE3Label = new views.Label();
  var RINSATE3Radio = new views.Radio();
  RINSATE3Radio.binding.value = '[SAMPLES_SAMPTYPE]'
  RINSATE3Label.text.value = 'RINSATE3';
  RINSATE3Label.classes.value = 'fldname';

  RINSATE3Radio.classes.value = 'inp';

  var RINSATE3LabelContainer = new views.Container();
  RINSATE3LabelContainer.views.content.add([
    RINSATE3Label,
    RINSATE3Radio,
  ]);

  RINSATE3LabelContainer.classes.value = 'field'
  var TRIPBLANKLabel = new views.Label();
  var TRIPBLANKRadio = new views.Radio();
  TRIPBLANKRadio.binding.value = '[SAMPLES_SAMPTYPE]'
  TRIPBLANKLabel.text.value = 'TRIP BLANK';
  TRIPBLANKLabel.classes.value = 'fldname';

  TRIPBLANKRadio.classes.value = 'inp';

  var TRIPBLANKLabelContainer = new views.Container();
  TRIPBLANKLabelContainer.views.content.add([
    TRIPBLANKLabel,
    TRIPBLANKRadio,
  ]);

  TRIPBLANKLabelContainer.classes.value = 'field'
  var TRIPSPIKELabel = new views.Label();
  var TRIPSPIKERadio = new views.Radio();
  TRIPSPIKERadio.binding.value = '[SAMPLES_SAMPTYPE]'
  TRIPSPIKELabel.text.value = 'TRIP SPIKE';
  TRIPSPIKELabel.classes.value = 'fldname';

  TRIPSPIKERadio.classes.value = 'inp';

  var TRIPSPIKELabelContainer = new views.Container();
  TRIPSPIKELabelContainer.views.content.add([
    TRIPSPIKELabel,
    TRIPSPIKERadio,
  ]);

  TRIPSPIKELabelContainer.classes.value = 'field'
  var SampleCommentLabel = new views.Label();
  var SampleCommentTextarea = new views.Textarea();
  SampleCommentTextarea.binding.value = '[SAMPLES_COMMNT]'
  SampleCommentLabel.text.value = 'Sample Comment';
  SampleCommentLabel.classes.value = 'fldname';

  SampleCommentTextarea.classes.value = 'inp';

  var SampleCommentLabelContainer = new views.Container();
  SampleCommentLabelContainer.views.content.add([
    SampleCommentLabel,
    SampleCommentTextarea,
  ]);

  SampleCommentLabelContainer.classes.value = 'field'
   var formTemplate = new views.Container();
    formTemplate.views.content.add([
      GroundWaterMonitoringFormLabelContainer,
      SiteIDLabelContainer,
      JobNameLabelContainer,
      BasinLabelContainer,
      WellfieldLabelContainer,
      RecordedByLabelContainer,
      DateLabelContainer,
      TimeLabelContainer,
      FreeGasReadingMethaneLabelContainer,
      WellTypeLabelContainer,
      MonitoringLabelContainer,
      ExtractionLabelContainer,
      OtherLabelContainer,
      WellMaterialLabelContainer,
      PVCLabelContainer,
      SteelLabelContainer,
      OtherLabelContainer,
      PurgeSetupLabelContainer,
      WellHeadConditionLabelContainer,
      WaterLevelDepthLabelContainer,
      MeasurementPointDescriptionLabelContainer,
      TotalDepthofWellLabelContainer,
      WellDiameterLabelContainer,
      BailerTypeLabelContainer,
      PVCLabelContainer,
      SteelLabelContainer,
      TeflonLabelContainer,
      OtherLabelContainer,
      PumpTypeLabelContainer,
      SubmersibleLabelContainer,
      BladderLabelContainer,
      OtherLabelContainer,
      NotesLabelContainer,
      PumpIntakeSettingLabelContainer,
      DepthLabelContainer,
      FieldParameterMeasurementsLabelContainer,
      TimeLabelContainer,
      VolumePurgedLabelContainer,
      DOLabelContainer,
      DOppmLabelContainer,
      ElectricalCondutivitiyLabelContainer,
      ElectricalCondutivitiyLabelContainer,
      pHLabelContainer,
      RedOxLabelContainer,
      TempLabelContainer,
      TurbidityLabelContainer,
      MeasurementCommentsLabelContainer,
      DischargewaterdisposalLabelContainer,
      DrumsLabelContainer,
      SanitaryLabelContainer,
      SewerStormLabelContainer,
      SewerLabelContainer,
      OtherLabelContainer,
      OtherCommentLabelContainer,
      WellSamplingLabelContainer,
      SampleTakenLabelContainer,
      SamplingMethodLabelContainer,
      BOTTLENUMBERLabelContainer,
      SAMPLENUMBERLabelContainer,
      BOTTLETYPELabelContainer,
      SampleTypeLabelContainer,
      PRIMARYLabelContainer,
      DUPE1LabelContainer,
      DUPE2LabelContainer,
      DUPE3LabelContainer,
      TRIPCLICATE1LabelContainer,
      TRIPCLICATE2LabelContainer,
      TRIPCLICATE3LabelContainer,
      RINSATE1LabelContainer,
      RINSATE2LabelContainer,
      RINSATE3LabelContainer,
      TRIPBLANKLabelContainer,
      TRIPSPIKELabelContainer,
      SampleCommentLabelContainer
    ]);
  formTemplate.path = '[/form]';
    return formTemplate;
  }
function createView(){
var appView = new views.Container();
appView.views.content.add([
  createForm(),
]);
appView.classes.value = 'app';
return appView;
}
return createView;
}