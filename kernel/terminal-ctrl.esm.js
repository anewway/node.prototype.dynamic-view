/**
 *	Author: JCloudYu
 *	Create: 2019/07/16
**/
export const ColorCode = Object.freeze({
	// region [ 8 Colors ]
	RESET:				"\u001b[39m",
	BLACK:				"\u001b[30m",
	RED:				"\u001b[31m",
	GREEN:				"\u001b[32m",
	YELLOW:				"\u001b[33m",
	BLUE:				"\u001b[34m",
	MAGENTA:			"\u001b[35m",
	CYAN:				"\u001b[36m",
	LIGHT_GRAY:			"\u001b[37m",
	
	BG_RESET:			"\u001b[49m",
	BG_BLACK:			"\u001b[40m",
	BG_RED:				"\u001b[41m",
	BG_GREEN:			"\u001b[42m",
	BG_YELLOW:			"\u001b[43m",
	BG_BLUE:			"\u001b[44m",
	BG_MAGENTA:			"\u001b[45m",
	BG_CYAN:			"\u001b[46m",
	BG_LIGHT_GRAY:		"\u001b[47m",
	// endregion
	
	// region [ 16 Colors ]
	DARK_GRAY:			"\u001b[90m",
	LIGHT_RED:			"\u001b[91m",
	LIGHT_GREEN:		"\u001b[92m",
	LIGHT_YELLOW:		"\u001b[93m",
	LIGHT_BLUE:			"\u001b[94m",
	LIGHT_MAGENTA:		"\u001b[95m",
	LIGHT_CYAN:			"\u001b[96m",
	WHITE:				"\u001b[97m",
	
	BG_DARK_GRAY:		"\u001b[100m",
	BG_LIGHT_RED:		"\u001b[101m",
	BG_LIGHT_GREEN:		"\u001b[102m",
	BG_LIGHT_YELLOW:	"\u001b[103m",
	BG_LIGHT_BLUE:		"\u001b[104m",
	BG_LIGHT_MAGENTA:	"\u001b[105m",
	BG_LIGHT_CYAN:		"\u001b[106m",
	BG_WHITE:			"\u001b[107m",
	// endregion
	
	// region [ 256 Colors ]
	COLOR_0: "\u001b[38;5;0m",
	COLOR_1: "\u001b[38;5;1m",
	COLOR_2: "\u001b[38;5;2m",
	COLOR_3: "\u001b[38;5;3m",
	COLOR_4: "\u001b[38;5;4m",
	COLOR_5: "\u001b[38;5;5m",
	COLOR_6: "\u001b[38;5;6m",
	COLOR_7: "\u001b[38;5;7m",
	COLOR_8: "\u001b[38;5;8m",
	COLOR_9: "\u001b[38;5;9m",
	COLOR_10: "\u001b[38;5;10m",
	COLOR_11: "\u001b[38;5;11m",
	COLOR_12: "\u001b[38;5;12m",
	COLOR_13: "\u001b[38;5;13m",
	COLOR_14: "\u001b[38;5;14m",
	COLOR_15: "\u001b[38;5;15m",
	COLOR_16: "\u001b[38;5;16m",
	COLOR_17: "\u001b[38;5;17m",
	COLOR_18: "\u001b[38;5;18m",
	COLOR_19: "\u001b[38;5;19m",
	COLOR_20: "\u001b[38;5;20m",
	COLOR_21: "\u001b[38;5;21m",
	COLOR_22: "\u001b[38;5;22m",
	COLOR_23: "\u001b[38;5;23m",
	COLOR_24: "\u001b[38;5;24m",
	COLOR_25: "\u001b[38;5;25m",
	COLOR_26: "\u001b[38;5;26m",
	COLOR_27: "\u001b[38;5;27m",
	COLOR_28: "\u001b[38;5;28m",
	COLOR_29: "\u001b[38;5;29m",
	COLOR_30: "\u001b[38;5;30m",
	COLOR_31: "\u001b[38;5;31m",
	COLOR_32: "\u001b[38;5;32m",
	COLOR_33: "\u001b[38;5;33m",
	COLOR_34: "\u001b[38;5;34m",
	COLOR_35: "\u001b[38;5;35m",
	COLOR_36: "\u001b[38;5;36m",
	COLOR_37: "\u001b[38;5;37m",
	COLOR_38: "\u001b[38;5;38m",
	COLOR_39: "\u001b[38;5;39m",
	COLOR_40: "\u001b[38;5;40m",
	COLOR_41: "\u001b[38;5;41m",
	COLOR_42: "\u001b[38;5;42m",
	COLOR_43: "\u001b[38;5;43m",
	COLOR_44: "\u001b[38;5;44m",
	COLOR_45: "\u001b[38;5;45m",
	COLOR_46: "\u001b[38;5;46m",
	COLOR_47: "\u001b[38;5;47m",
	COLOR_48: "\u001b[38;5;48m",
	COLOR_49: "\u001b[38;5;49m",
	COLOR_50: "\u001b[38;5;50m",
	COLOR_51: "\u001b[38;5;51m",
	COLOR_52: "\u001b[38;5;52m",
	COLOR_53: "\u001b[38;5;53m",
	COLOR_54: "\u001b[38;5;54m",
	COLOR_55: "\u001b[38;5;55m",
	COLOR_56: "\u001b[38;5;56m",
	COLOR_57: "\u001b[38;5;57m",
	COLOR_58: "\u001b[38;5;58m",
	COLOR_59: "\u001b[38;5;59m",
	COLOR_60: "\u001b[38;5;60m",
	COLOR_61: "\u001b[38;5;61m",
	COLOR_62: "\u001b[38;5;62m",
	COLOR_63: "\u001b[38;5;63m",
	COLOR_64: "\u001b[38;5;64m",
	COLOR_65: "\u001b[38;5;65m",
	COLOR_66: "\u001b[38;5;66m",
	COLOR_67: "\u001b[38;5;67m",
	COLOR_68: "\u001b[38;5;68m",
	COLOR_69: "\u001b[38;5;69m",
	COLOR_70: "\u001b[38;5;70m",
	COLOR_71: "\u001b[38;5;71m",
	COLOR_72: "\u001b[38;5;72m",
	COLOR_73: "\u001b[38;5;73m",
	COLOR_74: "\u001b[38;5;74m",
	COLOR_75: "\u001b[38;5;75m",
	COLOR_76: "\u001b[38;5;76m",
	COLOR_77: "\u001b[38;5;77m",
	COLOR_78: "\u001b[38;5;78m",
	COLOR_79: "\u001b[38;5;79m",
	COLOR_80: "\u001b[38;5;80m",
	COLOR_81: "\u001b[38;5;81m",
	COLOR_82: "\u001b[38;5;82m",
	COLOR_83: "\u001b[38;5;83m",
	COLOR_84: "\u001b[38;5;84m",
	COLOR_85: "\u001b[38;5;85m",
	COLOR_86: "\u001b[38;5;86m",
	COLOR_87: "\u001b[38;5;87m",
	COLOR_88: "\u001b[38;5;88m",
	COLOR_89: "\u001b[38;5;89m",
	COLOR_90: "\u001b[38;5;90m",
	COLOR_91: "\u001b[38;5;91m",
	COLOR_92: "\u001b[38;5;92m",
	COLOR_93: "\u001b[38;5;93m",
	COLOR_94: "\u001b[38;5;94m",
	COLOR_95: "\u001b[38;5;95m",
	COLOR_96: "\u001b[38;5;96m",
	COLOR_97: "\u001b[38;5;97m",
	COLOR_98: "\u001b[38;5;98m",
	COLOR_99: "\u001b[38;5;99m",
	COLOR_100: "\u001b[38;5;100m",
	COLOR_101: "\u001b[38;5;101m",
	COLOR_102: "\u001b[38;5;102m",
	COLOR_103: "\u001b[38;5;103m",
	COLOR_104: "\u001b[38;5;104m",
	COLOR_105: "\u001b[38;5;105m",
	COLOR_106: "\u001b[38;5;106m",
	COLOR_107: "\u001b[38;5;107m",
	COLOR_108: "\u001b[38;5;108m",
	COLOR_109: "\u001b[38;5;109m",
	COLOR_110: "\u001b[38;5;110m",
	COLOR_111: "\u001b[38;5;111m",
	COLOR_112: "\u001b[38;5;112m",
	COLOR_113: "\u001b[38;5;113m",
	COLOR_114: "\u001b[38;5;114m",
	COLOR_115: "\u001b[38;5;115m",
	COLOR_116: "\u001b[38;5;116m",
	COLOR_117: "\u001b[38;5;117m",
	COLOR_118: "\u001b[38;5;118m",
	COLOR_119: "\u001b[38;5;119m",
	COLOR_120: "\u001b[38;5;120m",
	COLOR_121: "\u001b[38;5;121m",
	COLOR_122: "\u001b[38;5;122m",
	COLOR_123: "\u001b[38;5;123m",
	COLOR_124: "\u001b[38;5;124m",
	COLOR_125: "\u001b[38;5;125m",
	COLOR_126: "\u001b[38;5;126m",
	COLOR_127: "\u001b[38;5;127m",
	COLOR_128: "\u001b[38;5;128m",
	COLOR_129: "\u001b[38;5;129m",
	COLOR_130: "\u001b[38;5;130m",
	COLOR_131: "\u001b[38;5;131m",
	COLOR_132: "\u001b[38;5;132m",
	COLOR_133: "\u001b[38;5;133m",
	COLOR_134: "\u001b[38;5;134m",
	COLOR_135: "\u001b[38;5;135m",
	COLOR_136: "\u001b[38;5;136m",
	COLOR_137: "\u001b[38;5;137m",
	COLOR_138: "\u001b[38;5;138m",
	COLOR_139: "\u001b[38;5;139m",
	COLOR_140: "\u001b[38;5;140m",
	COLOR_141: "\u001b[38;5;141m",
	COLOR_142: "\u001b[38;5;142m",
	COLOR_143: "\u001b[38;5;143m",
	COLOR_144: "\u001b[38;5;144m",
	COLOR_145: "\u001b[38;5;145m",
	COLOR_146: "\u001b[38;5;146m",
	COLOR_147: "\u001b[38;5;147m",
	COLOR_148: "\u001b[38;5;148m",
	COLOR_149: "\u001b[38;5;149m",
	COLOR_150: "\u001b[38;5;150m",
	COLOR_151: "\u001b[38;5;151m",
	COLOR_152: "\u001b[38;5;152m",
	COLOR_153: "\u001b[38;5;153m",
	COLOR_154: "\u001b[38;5;154m",
	COLOR_155: "\u001b[38;5;155m",
	COLOR_156: "\u001b[38;5;156m",
	COLOR_157: "\u001b[38;5;157m",
	COLOR_158: "\u001b[38;5;158m",
	COLOR_159: "\u001b[38;5;159m",
	COLOR_160: "\u001b[38;5;160m",
	COLOR_161: "\u001b[38;5;161m",
	COLOR_162: "\u001b[38;5;162m",
	COLOR_163: "\u001b[38;5;163m",
	COLOR_164: "\u001b[38;5;164m",
	COLOR_165: "\u001b[38;5;165m",
	COLOR_166: "\u001b[38;5;166m",
	COLOR_167: "\u001b[38;5;167m",
	COLOR_168: "\u001b[38;5;168m",
	COLOR_169: "\u001b[38;5;169m",
	COLOR_170: "\u001b[38;5;170m",
	COLOR_171: "\u001b[38;5;171m",
	COLOR_172: "\u001b[38;5;172m",
	COLOR_173: "\u001b[38;5;173m",
	COLOR_174: "\u001b[38;5;174m",
	COLOR_175: "\u001b[38;5;175m",
	COLOR_176: "\u001b[38;5;176m",
	COLOR_177: "\u001b[38;5;177m",
	COLOR_178: "\u001b[38;5;178m",
	COLOR_179: "\u001b[38;5;179m",
	COLOR_180: "\u001b[38;5;180m",
	COLOR_181: "\u001b[38;5;181m",
	COLOR_182: "\u001b[38;5;182m",
	COLOR_183: "\u001b[38;5;183m",
	COLOR_184: "\u001b[38;5;184m",
	COLOR_185: "\u001b[38;5;185m",
	COLOR_186: "\u001b[38;5;186m",
	COLOR_187: "\u001b[38;5;187m",
	COLOR_188: "\u001b[38;5;188m",
	COLOR_189: "\u001b[38;5;189m",
	COLOR_190: "\u001b[38;5;190m",
	COLOR_191: "\u001b[38;5;191m",
	COLOR_192: "\u001b[38;5;192m",
	COLOR_193: "\u001b[38;5;193m",
	COLOR_194: "\u001b[38;5;194m",
	COLOR_195: "\u001b[38;5;195m",
	COLOR_196: "\u001b[38;5;196m",
	COLOR_197: "\u001b[38;5;197m",
	COLOR_198: "\u001b[38;5;198m",
	COLOR_199: "\u001b[38;5;199m",
	COLOR_200: "\u001b[38;5;200m",
	COLOR_201: "\u001b[38;5;201m",
	COLOR_202: "\u001b[38;5;202m",
	COLOR_203: "\u001b[38;5;203m",
	COLOR_204: "\u001b[38;5;204m",
	COLOR_205: "\u001b[38;5;205m",
	COLOR_206: "\u001b[38;5;206m",
	COLOR_207: "\u001b[38;5;207m",
	COLOR_208: "\u001b[38;5;208m",
	COLOR_209: "\u001b[38;5;209m",
	COLOR_210: "\u001b[38;5;210m",
	COLOR_211: "\u001b[38;5;211m",
	COLOR_212: "\u001b[38;5;212m",
	COLOR_213: "\u001b[38;5;213m",
	COLOR_214: "\u001b[38;5;214m",
	COLOR_215: "\u001b[38;5;215m",
	COLOR_216: "\u001b[38;5;216m",
	COLOR_217: "\u001b[38;5;217m",
	COLOR_218: "\u001b[38;5;218m",
	COLOR_219: "\u001b[38;5;219m",
	COLOR_220: "\u001b[38;5;220m",
	COLOR_221: "\u001b[38;5;221m",
	COLOR_222: "\u001b[38;5;222m",
	COLOR_223: "\u001b[38;5;223m",
	COLOR_224: "\u001b[38;5;224m",
	COLOR_225: "\u001b[38;5;225m",
	COLOR_226: "\u001b[38;5;226m",
	COLOR_227: "\u001b[38;5;227m",
	COLOR_228: "\u001b[38;5;228m",
	COLOR_229: "\u001b[38;5;229m",
	COLOR_230: "\u001b[38;5;230m",
	COLOR_231: "\u001b[38;5;231m",
	COLOR_232: "\u001b[38;5;232m",
	COLOR_233: "\u001b[38;5;233m",
	COLOR_234: "\u001b[38;5;234m",
	COLOR_235: "\u001b[38;5;235m",
	COLOR_236: "\u001b[38;5;236m",
	COLOR_237: "\u001b[38;5;237m",
	COLOR_238: "\u001b[38;5;238m",
	COLOR_239: "\u001b[38;5;239m",
	COLOR_240: "\u001b[38;5;240m",
	COLOR_241: "\u001b[38;5;241m",
	COLOR_242: "\u001b[38;5;242m",
	COLOR_243: "\u001b[38;5;243m",
	COLOR_244: "\u001b[38;5;244m",
	COLOR_245: "\u001b[38;5;245m",
	COLOR_246: "\u001b[38;5;246m",
	COLOR_247: "\u001b[38;5;247m",
	COLOR_248: "\u001b[38;5;248m",
	COLOR_249: "\u001b[38;5;249m",
	COLOR_250: "\u001b[38;5;250m",
	COLOR_251: "\u001b[38;5;251m",
	COLOR_252: "\u001b[38;5;252m",
	COLOR_253: "\u001b[38;5;253m",
	COLOR_254: "\u001b[38;5;254m",
	COLOR_255: "\u001b[38;5;255m",
	
		BG_COLOR_0: "\u001b[48;5;0m",
	BG_COLOR_1: "\u001b[48;5;1m",
	BG_COLOR_2: "\u001b[48;5;2m",
	BG_COLOR_3: "\u001b[48;5;3m",
	BG_COLOR_4: "\u001b[48;5;4m",
	BG_COLOR_5: "\u001b[48;5;5m",
	BG_COLOR_6: "\u001b[48;5;6m",
	BG_COLOR_7: "\u001b[48;5;7m",
	BG_COLOR_8: "\u001b[48;5;8m",
	BG_COLOR_9: "\u001b[48;5;9m",
	BG_COLOR_10: "\u001b[48;5;10m",
	BG_COLOR_11: "\u001b[48;5;11m",
	BG_COLOR_12: "\u001b[48;5;12m",
	BG_COLOR_13: "\u001b[48;5;13m",
	BG_COLOR_14: "\u001b[48;5;14m",
	BG_COLOR_15: "\u001b[48;5;15m",
	BG_COLOR_16: "\u001b[48;5;16m",
	BG_COLOR_17: "\u001b[48;5;17m",
	BG_COLOR_18: "\u001b[48;5;18m",
	BG_COLOR_19: "\u001b[48;5;19m",
	BG_COLOR_20: "\u001b[48;5;20m",
	BG_COLOR_21: "\u001b[48;5;21m",
	BG_COLOR_22: "\u001b[48;5;22m",
	BG_COLOR_23: "\u001b[48;5;23m",
	BG_COLOR_24: "\u001b[48;5;24m",
	BG_COLOR_25: "\u001b[48;5;25m",
	BG_COLOR_26: "\u001b[48;5;26m",
	BG_COLOR_27: "\u001b[48;5;27m",
	BG_COLOR_28: "\u001b[48;5;28m",
	BG_COLOR_29: "\u001b[48;5;29m",
	BG_COLOR_30: "\u001b[48;5;30m",
	BG_COLOR_31: "\u001b[48;5;31m",
	BG_COLOR_32: "\u001b[48;5;32m",
	BG_COLOR_33: "\u001b[48;5;33m",
	BG_COLOR_34: "\u001b[48;5;34m",
	BG_COLOR_35: "\u001b[48;5;35m",
	BG_COLOR_36: "\u001b[48;5;36m",
	BG_COLOR_37: "\u001b[48;5;37m",
	BG_COLOR_38: "\u001b[48;5;38m",
	BG_COLOR_39: "\u001b[48;5;39m",
	BG_COLOR_40: "\u001b[48;5;40m",
	BG_COLOR_41: "\u001b[48;5;41m",
	BG_COLOR_42: "\u001b[48;5;42m",
	BG_COLOR_43: "\u001b[48;5;43m",
	BG_COLOR_44: "\u001b[48;5;44m",
	BG_COLOR_45: "\u001b[48;5;45m",
	BG_COLOR_46: "\u001b[48;5;46m",
	BG_COLOR_47: "\u001b[48;5;47m",
	BG_COLOR_48: "\u001b[48;5;48m",
	BG_COLOR_49: "\u001b[48;5;49m",
	BG_COLOR_50: "\u001b[48;5;50m",
	BG_COLOR_51: "\u001b[48;5;51m",
	BG_COLOR_52: "\u001b[48;5;52m",
	BG_COLOR_53: "\u001b[48;5;53m",
	BG_COLOR_54: "\u001b[48;5;54m",
	BG_COLOR_55: "\u001b[48;5;55m",
	BG_COLOR_56: "\u001b[48;5;56m",
	BG_COLOR_57: "\u001b[48;5;57m",
	BG_COLOR_58: "\u001b[48;5;58m",
	BG_COLOR_59: "\u001b[48;5;59m",
	BG_COLOR_60: "\u001b[48;5;60m",
	BG_COLOR_61: "\u001b[48;5;61m",
	BG_COLOR_62: "\u001b[48;5;62m",
	BG_COLOR_63: "\u001b[48;5;63m",
	BG_COLOR_64: "\u001b[48;5;64m",
	BG_COLOR_65: "\u001b[48;5;65m",
	BG_COLOR_66: "\u001b[48;5;66m",
	BG_COLOR_67: "\u001b[48;5;67m",
	BG_COLOR_68: "\u001b[48;5;68m",
	BG_COLOR_69: "\u001b[48;5;69m",
	BG_COLOR_70: "\u001b[48;5;70m",
	BG_COLOR_71: "\u001b[48;5;71m",
	BG_COLOR_72: "\u001b[48;5;72m",
	BG_COLOR_73: "\u001b[48;5;73m",
	BG_COLOR_74: "\u001b[48;5;74m",
	BG_COLOR_75: "\u001b[48;5;75m",
	BG_COLOR_76: "\u001b[48;5;76m",
	BG_COLOR_77: "\u001b[48;5;77m",
	BG_COLOR_78: "\u001b[48;5;78m",
	BG_COLOR_79: "\u001b[48;5;79m",
	BG_COLOR_80: "\u001b[48;5;80m",
	BG_COLOR_81: "\u001b[48;5;81m",
	BG_COLOR_82: "\u001b[48;5;82m",
	BG_COLOR_83: "\u001b[48;5;83m",
	BG_COLOR_84: "\u001b[48;5;84m",
	BG_COLOR_85: "\u001b[48;5;85m",
	BG_COLOR_86: "\u001b[48;5;86m",
	BG_COLOR_87: "\u001b[48;5;87m",
	BG_COLOR_88: "\u001b[48;5;88m",
	BG_COLOR_89: "\u001b[48;5;89m",
	BG_COLOR_90: "\u001b[48;5;90m",
	BG_COLOR_91: "\u001b[48;5;91m",
	BG_COLOR_92: "\u001b[48;5;92m",
	BG_COLOR_93: "\u001b[48;5;93m",
	BG_COLOR_94: "\u001b[48;5;94m",
	BG_COLOR_95: "\u001b[48;5;95m",
	BG_COLOR_96: "\u001b[48;5;96m",
	BG_COLOR_97: "\u001b[48;5;97m",
	BG_COLOR_98: "\u001b[48;5;98m",
	BG_COLOR_99: "\u001b[48;5;99m",
	BG_COLOR_100: "\u001b[48;5;100m",
	BG_COLOR_101: "\u001b[48;5;101m",
	BG_COLOR_102: "\u001b[48;5;102m",
	BG_COLOR_103: "\u001b[48;5;103m",
	BG_COLOR_104: "\u001b[48;5;104m",
	BG_COLOR_105: "\u001b[48;5;105m",
	BG_COLOR_106: "\u001b[48;5;106m",
	BG_COLOR_107: "\u001b[48;5;107m",
	BG_COLOR_108: "\u001b[48;5;108m",
	BG_COLOR_109: "\u001b[48;5;109m",
	BG_COLOR_110: "\u001b[48;5;110m",
	BG_COLOR_111: "\u001b[48;5;111m",
	BG_COLOR_112: "\u001b[48;5;112m",
	BG_COLOR_113: "\u001b[48;5;113m",
	BG_COLOR_114: "\u001b[48;5;114m",
	BG_COLOR_115: "\u001b[48;5;115m",
	BG_COLOR_116: "\u001b[48;5;116m",
	BG_COLOR_117: "\u001b[48;5;117m",
	BG_COLOR_118: "\u001b[48;5;118m",
	BG_COLOR_119: "\u001b[48;5;119m",
	BG_COLOR_120: "\u001b[48;5;120m",
	BG_COLOR_121: "\u001b[48;5;121m",
	BG_COLOR_122: "\u001b[48;5;122m",
	BG_COLOR_123: "\u001b[48;5;123m",
	BG_COLOR_124: "\u001b[48;5;124m",
	BG_COLOR_125: "\u001b[48;5;125m",
	BG_COLOR_126: "\u001b[48;5;126m",
	BG_COLOR_127: "\u001b[48;5;127m",
	BG_COLOR_128: "\u001b[48;5;128m",
	BG_COLOR_129: "\u001b[48;5;129m",
	BG_COLOR_130: "\u001b[48;5;130m",
	BG_COLOR_131: "\u001b[48;5;131m",
	BG_COLOR_132: "\u001b[48;5;132m",
	BG_COLOR_133: "\u001b[48;5;133m",
	BG_COLOR_134: "\u001b[48;5;134m",
	BG_COLOR_135: "\u001b[48;5;135m",
	BG_COLOR_136: "\u001b[48;5;136m",
	BG_COLOR_137: "\u001b[48;5;137m",
	BG_COLOR_138: "\u001b[48;5;138m",
	BG_COLOR_139: "\u001b[48;5;139m",
	BG_COLOR_140: "\u001b[48;5;140m",
	BG_COLOR_141: "\u001b[48;5;141m",
	BG_COLOR_142: "\u001b[48;5;142m",
	BG_COLOR_143: "\u001b[48;5;143m",
	BG_COLOR_144: "\u001b[48;5;144m",
	BG_COLOR_145: "\u001b[48;5;145m",
	BG_COLOR_146: "\u001b[48;5;146m",
	BG_COLOR_147: "\u001b[48;5;147m",
	BG_COLOR_148: "\u001b[48;5;148m",
	BG_COLOR_149: "\u001b[48;5;149m",
	BG_COLOR_150: "\u001b[48;5;150m",
	BG_COLOR_151: "\u001b[48;5;151m",
	BG_COLOR_152: "\u001b[48;5;152m",
	BG_COLOR_153: "\u001b[48;5;153m",
	BG_COLOR_154: "\u001b[48;5;154m",
	BG_COLOR_155: "\u001b[48;5;155m",
	BG_COLOR_156: "\u001b[48;5;156m",
	BG_COLOR_157: "\u001b[48;5;157m",
	BG_COLOR_158: "\u001b[48;5;158m",
	BG_COLOR_159: "\u001b[48;5;159m",
	BG_COLOR_160: "\u001b[48;5;160m",
	BG_COLOR_161: "\u001b[48;5;161m",
	BG_COLOR_162: "\u001b[48;5;162m",
	BG_COLOR_163: "\u001b[48;5;163m",
	BG_COLOR_164: "\u001b[48;5;164m",
	BG_COLOR_165: "\u001b[48;5;165m",
	BG_COLOR_166: "\u001b[48;5;166m",
	BG_COLOR_167: "\u001b[48;5;167m",
	BG_COLOR_168: "\u001b[48;5;168m",
	BG_COLOR_169: "\u001b[48;5;169m",
	BG_COLOR_170: "\u001b[48;5;170m",
	BG_COLOR_171: "\u001b[48;5;171m",
	BG_COLOR_172: "\u001b[48;5;172m",
	BG_COLOR_173: "\u001b[48;5;173m",
	BG_COLOR_174: "\u001b[48;5;174m",
	BG_COLOR_175: "\u001b[48;5;175m",
	BG_COLOR_176: "\u001b[48;5;176m",
	BG_COLOR_177: "\u001b[48;5;177m",
	BG_COLOR_178: "\u001b[48;5;178m",
	BG_COLOR_179: "\u001b[48;5;179m",
	BG_COLOR_180: "\u001b[48;5;180m",
	BG_COLOR_181: "\u001b[48;5;181m",
	BG_COLOR_182: "\u001b[48;5;182m",
	BG_COLOR_183: "\u001b[48;5;183m",
	BG_COLOR_184: "\u001b[48;5;184m",
	BG_COLOR_185: "\u001b[48;5;185m",
	BG_COLOR_186: "\u001b[48;5;186m",
	BG_COLOR_187: "\u001b[48;5;187m",
	BG_COLOR_188: "\u001b[48;5;188m",
	BG_COLOR_189: "\u001b[48;5;189m",
	BG_COLOR_190: "\u001b[48;5;190m",
	BG_COLOR_191: "\u001b[48;5;191m",
	BG_COLOR_192: "\u001b[48;5;192m",
	BG_COLOR_193: "\u001b[48;5;193m",
	BG_COLOR_194: "\u001b[48;5;194m",
	BG_COLOR_195: "\u001b[48;5;195m",
	BG_COLOR_196: "\u001b[48;5;196m",
	BG_COLOR_197: "\u001b[48;5;197m",
	BG_COLOR_198: "\u001b[48;5;198m",
	BG_COLOR_199: "\u001b[48;5;199m",
	BG_COLOR_200: "\u001b[48;5;200m",
	BG_COLOR_201: "\u001b[48;5;201m",
	BG_COLOR_202: "\u001b[48;5;202m",
	BG_COLOR_203: "\u001b[48;5;203m",
	BG_COLOR_204: "\u001b[48;5;204m",
	BG_COLOR_205: "\u001b[48;5;205m",
	BG_COLOR_206: "\u001b[48;5;206m",
	BG_COLOR_207: "\u001b[48;5;207m",
	BG_COLOR_208: "\u001b[48;5;208m",
	BG_COLOR_209: "\u001b[48;5;209m",
	BG_COLOR_210: "\u001b[48;5;210m",
	BG_COLOR_211: "\u001b[48;5;211m",
	BG_COLOR_212: "\u001b[48;5;212m",
	BG_COLOR_213: "\u001b[48;5;213m",
	BG_COLOR_214: "\u001b[48;5;214m",
	BG_COLOR_215: "\u001b[48;5;215m",
	BG_COLOR_216: "\u001b[48;5;216m",
	BG_COLOR_217: "\u001b[48;5;217m",
	BG_COLOR_218: "\u001b[48;5;218m",
	BG_COLOR_219: "\u001b[48;5;219m",
	BG_COLOR_220: "\u001b[48;5;220m",
	BG_COLOR_221: "\u001b[48;5;221m",
	BG_COLOR_222: "\u001b[48;5;222m",
	BG_COLOR_223: "\u001b[48;5;223m",
	BG_COLOR_224: "\u001b[48;5;224m",
	BG_COLOR_225: "\u001b[48;5;225m",
	BG_COLOR_226: "\u001b[48;5;226m",
	BG_COLOR_227: "\u001b[48;5;227m",
	BG_COLOR_228: "\u001b[48;5;228m",
	BG_COLOR_229: "\u001b[48;5;229m",
	BG_COLOR_230: "\u001b[48;5;230m",
	BG_COLOR_231: "\u001b[48;5;231m",
	BG_COLOR_232: "\u001b[48;5;232m",
	BG_COLOR_233: "\u001b[48;5;233m",
	BG_COLOR_234: "\u001b[48;5;234m",
	BG_COLOR_235: "\u001b[48;5;235m",
	BG_COLOR_236: "\u001b[48;5;236m",
	BG_COLOR_237: "\u001b[48;5;237m",
	BG_COLOR_238: "\u001b[48;5;238m",
	BG_COLOR_239: "\u001b[48;5;239m",
	BG_COLOR_240: "\u001b[48;5;240m",
	BG_COLOR_241: "\u001b[48;5;241m",
	BG_COLOR_242: "\u001b[48;5;242m",
	BG_COLOR_243: "\u001b[48;5;243m",
	BG_COLOR_244: "\u001b[48;5;244m",
	BG_COLOR_245: "\u001b[48;5;245m",
	BG_COLOR_246: "\u001b[48;5;246m",
	BG_COLOR_247: "\u001b[48;5;247m",
	BG_COLOR_248: "\u001b[48;5;248m",
	BG_COLOR_249: "\u001b[48;5;249m",
	BG_COLOR_250: "\u001b[48;5;250m",
	BG_COLOR_251: "\u001b[48;5;251m",
	BG_COLOR_252: "\u001b[48;5;252m",
	BG_COLOR_253: "\u001b[48;5;253m",
	BG_COLOR_254: "\u001b[48;5;254m",
	BG_COLOR_255: "\u001b[48;5;255m"
	// endregion
});
export const FormatCode = Object.freeze({
	RESET_ALL:			"\u001b[0m",

	BOLD:				"\u001b[1m",
	DIM:				"\u001b[2m",
	UNDERLINED:			"\u001b[4m",
	BLINK:				"\u001b[5m",
	REVERSE:			"\u001b[7m",
	HIDDEN:				"\u001b[8m",
	
	RESET_BOLD:			"\u001b[21m",
	RESET_DIM:			"\u001b[22m",
	RESET_UNDERLINED:	"\u001b[24m",
	RESET_BLINK:		"\u001b[25m",
	RESET_REVERSE:		"\u001b[27m",
	RESET_HIDDEN:		"\u001b[28m",
});
