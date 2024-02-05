const ldtTheme = {
  name: 'lets-do-this-theme',
  animation: {
    timing100: '100ms',
    timing200: '200ms',
    timing300: '300ms',
    timing400: '400ms',
    timing500: '500ms',
    timing600: '600ms',
    timing700: '700ms',
    timing800: '800ms',
    timing900: '900ms',
    timing1000: '1000ms',
    easeInCurve: 'cubic-bezier(.8, .2, .6, 1)',
    easeOutCurve: 'cubic-bezier(.2, .8, .4, 1)',
    easeInOutCurve: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeInQuinticCurve: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    easeOutQuinticCurve: 'cubic-bezier(0.23, 1, 0.32, 1)',
    easeInOutQuinticCurve: 'cubic-bezier(0.86, 0, 0.07, 1)',
    linearCurve: 'cubic-bezier(0, 0, 1, 1)',
  },
  borders: {
    border100: {
      borderColor: '#f5f5fa',
      borderStyle: 'solid',
      borderWidth: '1px',
    },
    border200: {
      borderColor: '#e3e3ec',
      borderStyle: 'solid',
      borderWidth: '1px',
    },
    border300: {
      borderColor: '#babac6',
      borderStyle: 'solid',
      borderWidth: '1px',
    },
    border400: {
      borderColor: '#7f7f8d',
      borderStyle: 'solid',
      borderWidth: '1px',
    },
    border500: {
      borderColor: '#494955',
      borderStyle: 'solid',
      borderWidth: '1px',
    },
    border600: {
      borderColor: '#000000',
      borderStyle: 'solid',
      borderWidth: '1px',
    },
    radius100: '2px',
    radius200: '4px',
    radius300: '8px',
    radius400: '12px',
    useRoundedCorners: true,
    buttonBorderRadius: '4px',
    inputBorderRadius: '4px',
    popoverBorderRadius: '0px',
    surfaceBorderRadius: '0px',
  },
  breakpoints: {
    small: 512,
    medium: 768,
    large: 1160,
  },
  colors: {
    primaryA: '#000000',
    primaryB: '#ffffff',
    primary: '#ff1040',
    primary50: '#b6eb31',
    primary100: '#b6eb31',
    primary200: '#b6eb31',
    primary300: '#b6eb31',
    primary400: '#b6eb31',
    primary500: '#ff1040',
    primary600: '#b6eb31',
    primary700: '#d23245',
    accent: '#40acce',
    accent50: '#b6eb31',
    accent100: '#f0fbff',
    accent200: '#b6eb31',
    accent300: '#b6eb31',
    accent400: '#b6eb31',
    accent500: '#40acce',
    accent600: '#b6eb31',
    accent700: '#b6eb31',
    negative: '#b6eb31',
    negative50: '#b6eb31',
    negative100: '#b6eb31',
    negative200: '#b6eb31',
    negative300: '#b6eb31',
    negative400: '#d23245',
    negative500: '#b6eb31',
    negative600: '#b6eb31',
    negative700: '#b6eb31',
    warning: '#ffc411',
    warning50: '#b6eb31',
    warning100: '#fff8e1',
    warning200: '#b6eb31',
    warning300: '#b6eb31',
    warning400: '#b6eb31',
    warning500: '#ffc411',
    warning600: '#b6eb31',
    warning700: '#b6eb31',
    positive: '#4db37c',
    positive50: '#b6eb31',
    positive100: '#f2fbf6',
    positive200: '#b6eb31',
    positive300: '#b6eb31',
    positive400: '#4db37c',
    positive500: '#4db37c',
    positive600: '#b6eb31',
    positive700: '#b6eb31',
    white: '#ffffff',
    black: '#000000',
    mono100: '#ffffff',
    mono200: '#f5f5fa',
    mono300: '#f5f5fa',
    mono400: '#e3e3ec',
    mono500: '#babac6',
    mono600: '#babac6',
    mono700: '#7f7f8d',
    mono800: '#494955',
    mono900: '#b6eb31',
    mono1000: '#000000',
    rating200: '#fff8e1',
    rating400: '#ffc411',
    buttonPrimaryFill: '#ff1040',
    buttonPrimaryText: '#ffffff',
    buttonPrimaryHover: '#d23245',
    buttonPrimaryActive: '#d23245',
    buttonPrimarySelectedFill: '#d23245',
    buttonPrimarySelectedText: '#ffffff',
    buttonPrimarySpinnerForeground: '#b6eb31',
    buttonPrimarySpinnerBackground: '#ff1040',
    buttonSecondaryFill: '#ffffff',
    buttonSecondaryText: '#ff1040',
    buttonSecondaryHover: '#ffffff',
    buttonSecondaryActive: '#ffffff',
    buttonSecondarySelectedFill: '#ffffff',
    buttonSecondarySelectedText: '#d23245',
    buttonSecondarySpinnerForeground: '#d23245',
    buttonSecondarySpinnerBackground: '#b6eb31',
    buttonTertiaryFill: '#ffffff',
    buttonTertiaryText: '#ff1040',
    buttonTertiaryHover: '#f5f5fa',
    buttonTertiaryActive: '#f5f5fa',
    buttonTertiarySelectedFill: '#f5f5fa',
    buttonTertiarySelectedText: '#ff1040',
    buttonTertiarySpinnerForeground: '#d23245',
    buttonTertiarySpinnerBackground: '#b6eb31',
    buttonMinimalFill: 'transparent',
    buttonMinimalText: '#ff1040',
    buttonMinimalHover: '#b6eb31',
    buttonMinimalActive: '#b6eb31',
    buttonMinimalSelectedFill: '#b6eb31',
    buttonMinimalSelectedText: '#ff1040',
    buttonMinimalSpinnerForeground: '#d23245',
    buttonMinimalSpinnerBackground: '#b6eb31',
    buttonDisabledFill: '#e3e3ec',
    buttonDisabledText: '#babac6',
    buttonDisabledSpinnerForeground: '#babac6',
    buttonDisabledSpinnerBackground: '#e3e3ec',
    breadcrumbsText: '#b6eb31',
    breadcrumbsSeparatorFill: '#7f7f8d',
    datepickerBackground: '#ffffff',
    datepickerDayFont: '#000000',
    datepickerDayFontDisabled: '#e3e3ec',
    datepickerDayPseudoSelected: '#b6eb31',
    datepickerDayPseudoHighlighted: '#b6eb31',
    calendarBackground: '#ffffff',
    calendarForeground: '#000000',
    calendarForegroundDisabled: '#e3e3ec',
    calendarHeaderBackground: '#ff1040',
    calendarHeaderForeground: '#ffffff',
    calendarHeaderBackgroundActive: '#d23245',
    calendarHeaderForegroundDisabled: '#ff1040',
    calendarDayBackgroundPseudoSelected: '#b6eb31',
    calendarDayForegroundPseudoSelected: '#000000',
    calendarDayBackgroundPseudoSelectedHighlighted: '#b6eb31',
    calendarDayForegroundPseudoSelectedHighlighted: '#000000',
    calendarDayBackgroundSelected: '#ffffff',
    calendarDayForegroundSelected: '#ff1040',
    calendarDayBackgroundSelectedHighlighted: '#ff1040',
    calendarDayForegroundSelectedHighlighted: '#ffffff',
    fileUploaderBackgroundColor: '#f5f5fa',
    fileUploaderBackgroundColorActive: '#b6eb31',
    fileUploaderBorderColorActive: '#ff1040',
    fileUploaderBorderColorDefault: '#e3e3ec',
    fileUploaderMessageColor: '#babac6',
    linkText: '#ff1040',
    linkVisited: '#d23245',
    linkHover: '#b6eb31',
    linkActive: '#ff1040',
    listHeaderFill: '#ffffff',
    listBodyFill: '#f5f5fa',
    listIconFill: '#e3e3ec',
    listBorder: '#e3e3ec',
    progressStepsCompletedText: '#ffffff',
    progressStepsCompletedFill: '#ff1040',
    progressStepsActiveText: '#ffffff',
    progressStepsActiveFill: '#ff1040',
    progressStepsIconActiveFill: '#ff1040',
    toggleFill: '#ffffff',
    toggleFillChecked: '#ff1040',
    toggleFillDisabled: '#babac6',
    toggleTrackFill: '#e3e3ec',
    toggleTrackFillDisabled: '#f5f5fa',
    tickFill: '#ffffff',
    tickFillHover: '#f5f5fa',
    tickFillActive: '#f5f5fa',
    tickFillSelected: '#ff1040',
    tickFillSelectedHover: '#d23245',
    tickFillSelectedHoverActive: '#d23245',
    tickFillError: '#b6eb31',
    tickFillErrorHover: '#b6eb31',
    tickFillErrorHoverActive: '#b6eb31',
    tickFillErrorSelected: '#d23245',
    tickFillErrorSelectedHover: '#b6eb31',
    tickFillErrorSelectedHoverActive: '#b6eb31',
    tickFillDisabled: '#e3e3ec',
    tickBorder: '#babac6',
    tickBorderError: '#d23245',
    tickMarkFill: '#ffffff',
    tickMarkFillError: '#ffffff',
    tickMarkFillDisabled: '#ffffff',
    sliderTrackFill: '#e3e3ec',
    sliderTrackFillHover: '#e3e3ec',
    sliderTrackFillActive: '#babac6',
    sliderTrackFillSelected: '#ff1040',
    sliderTrackFillSelectedHover: '#ff1040',
    sliderTrackFillSelectedActive: '#ff1040',
    sliderTrackFillDisabled: '#f5f5fa',
    sliderHandleFill: '#ffffff',
    sliderHandleFillHover: '#ffffff',
    sliderHandleFillActive: '#ffffff',
    sliderHandleFillSelected: '#ffffff',
    sliderHandleFillSelectedHover: '#ffffff',
    sliderHandleFillSelectedActive: '#ffffff',
    sliderHandleFillDisabled: '#e3e3ec',
    sliderHandleInnerFill: '#e3e3ec',
    sliderHandleInnerFillDisabled: '#e3e3ec',
    sliderHandleInnerFillSelectedHover: '#ff1040',
    sliderHandleInnerFillSelectedActive: '#ff1040',
    sliderBorder: '#e3e3ec',
    sliderBorderHover: '#ff1040',
    sliderBorderDisabled: '#babac6',
    inputBorder: '#babac6',
    inputFill: '#ffffff',
    inputFillError: '#ffffff',
    inputFillDisabled: '#f5f5fa',
    inputFillActive: '#ffffff',
    inputFillPositive: '#ffffff',
    inputTextDisabled: '#babac6',
    inputBorderError: '#babac6',
    inputBorderPositive: '#babac6',
    inputEnhancerFill: '#ffffff',
    inputEnhancerFillDisabled: '#f5f5fa',
    inputEnhancerTextDisabled: '#babac6',
    inputPlaceholder: '#7f7f8d',
    inputPlaceholderDisabled: '#babac6',
    menuFill: '#ffffff',
    menuFillHover: '#f5f5fa',
    menuFontDefault: '#494955',
    menuFontDisabled: '#e3e3ec',
    menuFontHighlighted: '#000000',
    menuFontSelected: '#000000',
    modalCloseColor: '#000000',
    modalCloseColorHover: '#494955',
    modalCloseColorFocus: '#494955',
    paginationTriangleDown: '#494955',
    headerNavigationFill: 'transparent',
    tabBarFill: '#f5f5fa',
    tabColor: '#494955',
    notificationPrimaryBackground: '#b6eb31',
    notificationPrimaryText: '#ff1040',
    notificationInfoBackground: '#b6eb31',
    notificationInfoText: '#40acce',
    notificationPositiveBackground: '#b6eb31',
    notificationPositiveText: '#4db37c',
    notificationWarningBackground: '#b6eb31',
    notificationWarningText: '#ffc411',
    notificationNegativeBackground: '#b6eb31',
    notificationNegativeText: '#b6eb31',
    tagSolidRampUnit: '400',
    tagSolidHoverRampUnit: '50',
    tagSolidActiveRampUnit: '100',
    tagSolidDisabledRampUnit: '50',
    tagSolidFontRampUnit: '50',
    tagSolidFontHoverRampUnit: '500',
    tagLightRampUnit: '50',
    tagLightHoverRampUnit: '100',
    tagLightActiveRampUnit: '100',
    tagLightDisabledRampUnit: '50',
    tagLightFontRampUnit: '500',
    tagLightFontHoverRampUnit: '500',
    tagOutlinedRampUnit: '400',
    tagOutlinedHoverRampUnit: '500',
    tagOutlinedActiveRampUnit: '600',
    tagOutlinedDisabledRampUnit: '50',
    tagOutlinedFontRampUnit: '500',
    tagOutlinedFontHoverRampUnit: '50',
    tagFontDisabledRampUnit: '200',
    tagNeutralSolidBackground: '#b6eb31',
    tagNeutralSolidHover: '#f5f5fa',
    tagNeutralSolidActive: '#e3e3ec',
    tagNeutralSolidDisabled: '#f5f5fa',
    tagNeutralSolidFont: '#ffffff',
    tagNeutralSolidFontHover: '#b6eb31',
    tagNeutralLightBackground: '#f5f5fa',
    tagNeutralLightHover: '#f5f5fa',
    tagNeutralLightActive: '#e3e3ec',
    tagNeutralLightDisabled: '#f5f5fa',
    tagNeutralLightFont: '#b6eb31',
    tagNeutralLightFontHover: '#b6eb31',
    tagNeutralOutlinedBackground: '#b6eb31',
    tagNeutralOutlinedHover: '#494955',
    tagNeutralOutlinedActive: '#b6eb31',
    tagNeutralOutlinedDisabled: '#f5f5fa',
    tagNeutralOutlinedFont: '#b6eb31',
    tagNeutralOutlinedFontHover: '#f5f5fa',
    tagNeutralFontDisabled: '#e3e3ec',
    tagPrimarySolidBackground: '#ff1040',
    tagPrimarySolidHover: '#b6eb31',
    tagPrimarySolidActive: '#b6eb31',
    tagPrimarySolidDisabled: '#b6eb31',
    tagPrimarySolidFont: '#b6eb31',
    tagPrimarySolidFontHover: '#d23245',
    tagPrimaryLightBackground: '#b6eb31',
    tagPrimaryLightHover: '#b6eb31',
    tagPrimaryLightActive: '#b6eb31',
    tagPrimaryLightDisabled: '#b6eb31',
    tagPrimaryLightFont: '#ff1040',
    tagPrimaryLightFontHover: '#ff1040',
    tagPrimaryOutlinedBackground: '#ff1040',
    tagPrimaryOutlinedHover: '#d23245',
    tagPrimaryOutlinedActive: '#b6eb31',
    tagPrimaryOutlinedDisabled: '#b6eb31',
    tagPrimaryOutlinedFont: '#ff1040',
    tagPrimaryOutlinedFontHover: '#b6eb31',
    tagPrimaryFontDisabled: '#b6eb31',
    tagAccentSolidBackground: '#b6eb31',
    tagAccentSolidHover: '#b6eb31',
    tagAccentSolidActive: '#f0fbff',
    tagAccentSolidDisabled: '#b6eb31',
    tagAccentSolidFont: '#b6eb31',
    tagAccentSolidFontHover: '#40acce',
    tagAccentLightBackground: '#b6eb31',
    tagAccentLightHover: '#f0fbff',
    tagAccentLightActive: '#f0fbff',
    tagAccentLightDisabled: '#b6eb31',
    tagAccentLightFont: '#40acce',
    tagAccentLightFontHover: '#40acce',
    tagAccentOutlinedBackground: '#b6eb31',
    tagAccentOutlinedHover: '#40acce',
    tagAccentOutlinedActive: '#b6eb31',
    tagAccentOutlinedDisabled: '#b6eb31',
    tagAccentOutlinedFont: '#40acce',
    tagAccentOutlinedFontHover: '#b6eb31',
    tagAccentFontDisabled: '#b6eb31',
    tagPositiveSolidBackground: '#4db37c',
    tagPositiveSolidHover: '#b6eb31',
    tagPositiveSolidActive: '#f2fbf6',
    tagPositiveSolidDisabled: '#b6eb31',
    tagPositiveSolidFont: '#ffffff',
    tagPositiveSolidFontHover: '#4db37c',
    tagPositiveLightBackground: '#b6eb31',
    tagPositiveLightHover: '#f2fbf6',
    tagPositiveLightActive: '#f2fbf6',
    tagPositiveLightDisabled: '#b6eb31',
    tagPositiveLightFont: '#4db37c',
    tagPositiveLightFontHover: '#4db37c',
    tagPositiveOutlinedBackground: '#4db37c',
    tagPositiveOutlinedHover: '#4db37c',
    tagPositiveOutlinedActive: '#b6eb31',
    tagPositiveOutlinedDisabled: '#b6eb31',
    tagPositiveOutlinedFont: '#4db37c',
    tagPositiveOutlinedFontHover: '#b6eb31',
    tagPositiveFontDisabled: '#b6eb31',
    tagWarningSolidBackground: '#b6eb31',
    tagWarningSolidHover: '#b6eb31',
    tagWarningSolidActive: '#fff8e1',
    tagWarningSolidDisabled: '#b6eb31',
    tagWarningSolidFont: '#b6eb31',
    tagWarningSolidFontHover: '#ffc411',
    tagWarningLightBackground: '#b6eb31',
    tagWarningLightHover: '#fff8e1',
    tagWarningLightActive: '#fff8e1',
    tagWarningLightDisabled: '#b6eb31',
    tagWarningLightFont: '#ffc411',
    tagWarningLightFontHover: '#ffc411',
    tagWarningOutlinedBackground: '#b6eb31',
    tagWarningOutlinedHover: '#ffc411',
    tagWarningOutlinedActive: '#b6eb31',
    tagWarningOutlinedDisabled: '#fff8e1',
    tagWarningOutlinedFont: '#b6eb31',
    tagWarningOutlinedFontHover: '#b6eb31',
    tagWarningFontDisabled: '#b6eb31',
    tagNegativeSolidBackground: '#d23245',
    tagNegativeSolidHover: '#b6eb31',
    tagNegativeSolidActive: '#b6eb31',
    tagNegativeSolidDisabled: '#b6eb31',
    tagNegativeSolidFont: '#b6eb31',
    tagNegativeSolidFontHover: '#b6eb31',
    tagNegativeLightBackground: '#b6eb31',
    tagNegativeLightHover: '#b6eb31',
    tagNegativeLightActive: '#b6eb31',
    tagNegativeLightDisabled: '#b6eb31',
    tagNegativeLightFont: '#b6eb31',
    tagNegativeLightFontHover: '#b6eb31',
    tagNegativeOutlinedBackground: '#d23245',
    tagNegativeOutlinedHover: '#b6eb31',
    tagNegativeOutlinedActive: '#b6eb31',
    tagNegativeOutlinedDisabled: '#b6eb31',
    tagNegativeOutlinedFont: '#b6eb31',
    tagNegativeOutlinedFontHover: '#b6eb31',
    tagNegativeFontDisabled: '#b6eb31',
    tableHeadBackgroundColor: '#ffffff',
    tableBackground: '#ffffff',
    tableStripedBackground: '#f5f5fa',
    tableFilter: '#babac6',
    tableFilterHeading: '#7f7f8d',
    tableFilterBackground: '#ffffff',
    tableFilterFooterBackground: '#f5f5fa',
    toastText: '#ffffff',
    toastPrimaryBackground: '#ff1040',
    toastInfoBackground: '#40acce',
    toastPositiveBackground: '#4db37c',
    toastWarningBackground: '#ffc411',
    toastNegativeBackground: '#b6eb31',
    spinnerTrackFill: '#b6eb31',
    progressbarTrackFill: '#b6eb31',
    tooltipBackground: '#494955',
    tooltipText: '#ffffff',
    colorPrimary: '#000000',
    colorSecondary: '#494955',
    background: '#ffffff',
    backgroundAlt: '#ffffff',
    backgroundInv: '#ff1040',
    foreground: '#000000',
    foregroundAlt: '#494955',
    foregroundInv: '#ffffff',
    border: '#e3e3ec',
    borderAlt: '#babac6',
    borderFocus: '#ff1040',
    borderError: '#b6eb31',
    shadowFocus: 'rgba(39, 110, 241, 0.32)',
    shadowError: 'rgba(229, 73, 55, 0.32)',
    backgroundPrimary: '#ffffff',
    backgroundSecondary: '#F6F6F6',
    backgroundTertiary: '#EEEEEE',
    backgroundInversePrimary: '#000000',
    backgroundInverseSecondary: '#1f1f1f',
    contentPrimary: '#000000',
    contentSecondary: '#545454',
    contentTertiary: '#757575',
    contentInversePrimary: '#ffffff',
    contentInverseSecondary: '#CBCBCB',
    contentInverseTertiary: '#AFAFAF',
    borderOpaque: '#E2E2E2',
    borderTransparent: 'rgba(0, 0, 0, 0.08)',
    borderSelected: '#ff1040',
    borderInverseOpaque: '#333333',
    borderInverseTransparent: 'rgba(255, 255, 255, 0.20)',
    borderInverseSelected: '#ffffff',
    backgroundStateDisabled: '#F6F6F6',
    backgroundOverlayDark: 'rgba(0, 0, 0, 0.30)',
    backgroundOverlayLight: 'rgba(0, 0, 0, 0.08)',
    backgroundAccent: '#40acce',
    backgroundNegative: '#b6eb31',
    backgroundWarning: '#ffc411',
    backgroundPositive: '#4db37c',
    backgroundLightAccent: '#EDF3FD',
    backgroundLightNegative: '#FBEFEE',
    backgroundLightWarning: '#FFF9EF',
    backgroundLightPositive: '#F0FAF3',
    backgroundAlwaysDark: '#000000',
    backgroundAlwaysLight: '#FFFFFF',
    contentStateDisabled: '#AFAFAF',
    contentAccent: '#40acce',
    contentOnColor: '#FFFFFF',
    contentNegative: '#b6eb31',
    contentWarning: '#C19132',
    contentPositive: '#4db37c',
    borderStateDisabled: '#F6F6F6',
    borderAccent: '#276EF1',
    borderAccentLight: '#9FBFF8',
    borderNegative: '#ECACA5',
    borderWarning: '#FFE3AC',
    borderPositive: '#9EE2B8',
    comboboxListItemHover: '#f5f5fa',
    comboboxListItemFocus: '#f5f5fa',
  },
  direction: 'auto',
  grid: {
    columns: [4, 8, 12],
    gutters: [16, 36, 36],
    margins: [16, 36, 64],
    gaps: 0,
    unit: 'px',
    maxWidth: 1280,
  },
  lighting: {
    shadow400: '0px 1px 4px rgba(0, 0, 0, 0.16)',
    shadow500: '0px 2px 8px rgba(0, 0, 0, 0.16)',
    shadow600: '0px 4px 16px rgba(0, 0, 0, 0.16)',
    shadow700: '0px 8px 24px rgba(0, 0, 0, 0.16)',
    overlay0: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0)',
    overlay100: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.04)',
    overlay200: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.08)',
    overlay300: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.12)',
    overlay400: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.16)',
    overlay500: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.2)',
    overlay600: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.24)',
  },
  mediaQuery: {
    small: '@media screen and (min-width: 512px)',
    medium: '@media screen and (min-width: 768px)',
    large: '@media screen and (min-width: 1160px)',
  },
  sizing: {
    scale0: '2px',
    scale100: '4px',
    scale200: '6px',
    scale300: '8px',
    scale400: '10px',
    scale500: '12px',
    scale550: '14px',
    scale600: '16px',
    scale650: '18px',
    scale700: '20px',
    scale750: '22px',
    scale800: '24px',
    scale900: '32px',
    scale1000: '40px',
    scale1200: '48px',
    scale1400: '56px',
    scale1600: '64px',
    scale2400: '96px',
    scale3200: '128px',
    scale4800: '192px',
  },
  typography: {
    font100: {
      fontFamily: 'Pangram',
      fontSize: '12px',
      fontWeight: 'normal',
      lineHeight: '20px',
    },
    font150: {
      fontFamily: 'Pangram',
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: '16px',
    },
    font200: {
      fontFamily: 'Pangram',
      fontSize: '14px',
      fontWeight: 'normal',
      lineHeight: '22px',
    },
    font250: {
      fontFamily: 'Pangram',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '16px',
    },
    font300: {
      fontFamily: 'Pangram',
      fontSize: '16px',
      fontWeight: 'normal',
      lineHeight: '24px',
    },
    font350: {
      fontFamily: 'Pangram',
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '20px',
    },
    font400: {
      fontFamily: 'Pangram',
      fontSize: '18px',
      fontWeight: 'normal',
      lineHeight: '28px',
    },
    font450: {
      fontFamily: 'Pangram',
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: '24px',
    },
    font550: {
      fontFamily: 'Pangram',
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: '24px',
    },
    font650: {
      fontFamily: 'Pangram',
      fontSize: '20px',
      fontWeight: 700,
      lineHeight: '28px',
    },
    font750: {
      fontFamily: 'Pangram',
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: '32px',
    },
    font850: {
      fontFamily: 'Pangram',
      fontSize: '30px',
      fontWeight: 700,
      lineHeight: '42px',
    },
    font950: {
      fontFamily: 'Pangram',
      fontSize: '36px',
      fontWeight: 700,
      lineHeight: '44px',
    },
    font1050: {
      fontFamily: 'Pangram',
      fontSize: '40px',
      fontWeight: 700,
      lineHeight: '52px',
    },
    font1150: {
      fontFamily: 'Pangram',
      fontSize: '36px',
      fontWeight: 500,
      lineHeight: '44px',
    },
    font1250: {
      fontFamily: 'Pangram',
      fontSize: '44px',
      fontWeight: 500,
      lineHeight: '52px',
    },
    font1350: {
      fontFamily: 'Pangram',
      fontSize: '52px',
      fontWeight: 500,
      lineHeight: '64px',
    },
    font1450: {
      fontFamily: 'Pangram',
      fontSize: '96px',
      fontWeight: 500,
      lineHeight: '112px',
    },
    ParagraphXSmall: {
      fontFamily: 'Pangram',
      fontSize: '12px',
      fontWeight: 'normal',
      lineHeight: '20px',
    },
    ParagraphSmall: {
      fontFamily: 'Pangram',
      fontSize: '14px',
      fontWeight: 'normal',
      lineHeight: '22px',
    },
    ParagraphMedium: {
      fontFamily: 'Pangram',
      fontSize: '16px',
      fontWeight: 'normal',
      lineHeight: '24px',
    },
    ParagraphLarge: {
      fontFamily: 'Pangram',
      fontSize: '18px',
      fontWeight: 'normal',
      lineHeight: '28px',
    },
    LabelXSmall: {
      fontFamily: 'Pangram',
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: '16px',
    },
    LabelSmall: {
      fontFamily: 'Pangram',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '16px',
    },
    LabelMedium: {
      fontFamily: 'Pangram',
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '20px',
    },
    LabelLarge: {
      fontFamily: 'Pangram',
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: '24px',
    },
    HeadingXSmall: {
      fontFamily: 'Pangram',
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: '24px',
    },
    HeadingSmall: {
      fontFamily: 'Pangram',
      fontSize: '20px',
      fontWeight: 700,
      lineHeight: '28px',
    },
    HeadingMedium: {
      fontFamily: 'Pangram',
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: '32px',
    },
    HeadingLarge: {
      fontFamily: 'Pangram',
      fontSize: '30px',
      fontWeight: 700,
      lineHeight: '42px',
    },
    HeadingXLarge: {
      fontFamily: 'Pangram',
      fontSize: '36px',
      fontWeight: 700,
      lineHeight: '44px',
    },
    HeadingXXLarge: {
      fontFamily: 'Pangram',
      fontSize: '40px',
      fontWeight: 700,
      lineHeight: '52px',
    },
    DisplayXSmall: {
      fontFamily: 'Pangram',
      fontSize: '36px',
      fontWeight: 500,
      lineHeight: '44px',
    },
    DisplaySmall: {
      fontFamily: 'Pangram',
      fontSize: '44px',
      fontWeight: 500,
      lineHeight: '52px',
    },
    DisplayMedium: {
      fontFamily: 'Pangram',
      fontSize: '52px',
      fontWeight: 500,
      lineHeight: '64px',
    },
    DisplayLarge: {
      fontFamily: 'Pangram',
      fontSize: '96px',
      fontWeight: 500,
      lineHeight: '112px',
    },
  },
  zIndex: {
    modal: 2000,
  },
};

export default ldtTheme;