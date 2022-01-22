import platform
import psutil
import os
my_system = platform.uname()
if os.path.exists('Sakura🛰️Server/Coolist.json'):
    os.remove('Sakura🛰️Server/Coolist.json')
    print(f'''
💡INFO ⬰ 𝐒𝐲𝐬𝐭𝐞𝐦: {my_system.system}
💡INFO ⬰ 𝐍𝐨𝐝𝐞 𝐍𝐚𝐦𝐞: {my_system.node}
💡INFO ⬰ 𝐑𝐞𝐥𝐞𝐚𝐬𝐞: {my_system.release}
💡INFO ⬰ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧: {my_system.version}
💡INFO ⬰ 𝐌𝐚𝐜𝐡𝐢𝐧𝐞: {my_system.machine}
💡INFO ⬰ 𝐌𝐞𝐦𝐨𝐫𝐲: {psutil.virtual_memory()}
''')
    print('💡INFO ⬰ 𝗖𝗼𝗼𝗹𝗷𝘀𝗼𝗻.𝗷𝘀𝗼𝗻 -𝗿𝗺 𝗱𝗼𝗻𝗲!')
    print('💡INFO ⬰ 𝗖𝗼𝗻𝘁𝗶𝗻𝘂𝗶𝗻𝗴 𝗧𝗼𝘄𝗮𝗿𝗱𝘀 𝗧𝗼𝘂𝗰𝗵.𝗷𝘀')
else:
    pass
os.system('touch Sakura🛰️Server/Coolist.json')
os.system('node Sakura🛰️Server/touched.js')
os.system('node Sakura☣️Reactor/🍹ֆǟӄʊʀǟ™.js')

