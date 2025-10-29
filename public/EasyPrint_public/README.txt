Easy Print - Estrutura /public (gerada automaticamente)
---------------------------------------------------

Resumo das pastas criadas e finalidade sugerida para cada uma (use isto como guia para o seu agente de IA):

1) /home/banner-principal -> Banners muito largos para carrossel ou hero da página inicial.
2) /home/hero -> Imagens largas (menos extremas) para seções principais de destaque.
3) /servicos/landscape -> Fotos e exemplos de serviços em formato paisagem.
4) /galeria/quadrados -> Imagens quadradas para portfólios, produtos ou grid de projetos.
5) /clientes/logos -> Logos e ícones de parceiros/empresas (imagens pequenas ou com transparência).
6) /sobre-nos/equipe -> Fotos em retrato (equipe) ou close-ups para 'Sobre nós'.
7) /misc, /outros -> Arquivos que não puderam ser classificados automaticamente.

Regras que usei para classificar automaticamente:
- Aspect ratio (largura/altura) >= 2.0 e largura >=1000px -> banner-principal
- Aspect ratio >= 1.5 -> home/hero
- Aspect ratio >= 1.2 -> servicos/landscape
- 0.8 < aspect ratio < 1.2 -> logos se pequeno/transparent/contém 'logo' no nome; senão galeria/quadrados
- aspect ratio <= 0.8 -> sobre-nos/equipe (retrato)

Observações e recomendações para o agente de IA:
- Prefira usar imagens de /clientes/logos para carrossel de parceiros e header quando existirem versões transparentes (png/webp).
- Use /home/banner-principal para o carrossel principal da home (são as mais largas).
- Use /servicos/landscape para páginas de serviço e exemplos (colocar em galerias e sliders).
- Use /galeria/quadrados para grids de portfólio; elas já são quadradas ou próximas.
- Caso o agente precise de imagens específicas por nome, use a convenção criada: prefixo_index.ext (ex: banner_01.jpg, logo_03.png).
- Se alguma imagem parecer fora do lugar, mover manualmente para a pasta correta é a forma mais segura.

Mapeamento completo (arquivo original -> pasta destino / nome novo) abaixo:

imgi_57_445089_c05e5138b43c4f03a48735622f0540c0~mv2.webp  ->  galeria/quadrados/gallery_01.webp  |  Square/gallery image - product or portfolio | size: 1168x1168, ratio: 1.00, bytes: 38446, transparent: False
imgi_56_445089_c05e5138b43c4f03a48735622f0540c0~mv2.jpg  ->  galeria/quadrados/gallery_02.jpg  |  Square/gallery image - product or portfolio | size: 1168x1168, ratio: 1.00, bytes: 110615, transparent: False
imgi_9_445089_bd36a7f3e4a646a99dc6f593cf6e908f~mv2.jpg  ->  home/banner-principal/banner_01.jpg  |  Wide banner / carousel image (likely homepage hero) | size: 1905x498, ratio: 3.83, bytes: 41783, transparent: False
imgi_8_445089_ff51aca602bf43ee8aca09f959ce1009~mv2.jpg  ->  home/banner-principal/banner_02.jpg  |  Wide banner / carousel image (likely homepage hero) | size: 1905x490, ratio: 3.89, bytes: 124196, transparent: False
imgi_22_445089_d1d75bcd3a6347678d313694c7d5dfc4~mv2.jpg  ->  home/banner-principal/banner_03.jpg  |  Wide banner / carousel image (likely homepage hero) | size: 1046x519, ratio: 2.02, bytes: 126498, transparent: False
imgi_1_445089_0de24100b2f24c348bd7cdc2f0865e1b~mv2.png  ->  home/hero/hero_01.png  |  Hero / showcase image | size: 900x449, ratio: 2.00, bytes: 648969, transparent: True
imgi_21_445089_126f8096d2aa4fa58cc0eb7d7297a955~mv2.jpg  ->  servicos/landscape/serv_01.jpg  |  Landscape photo - good for service examples or portfolio | size: 723x543, ratio: 1.33, bytes: 49625, transparent: False
imgi_23_445089_68e2921087fd4b5184a17826d71bdf9b~mv2.jpg  ->  galeria/quadrados/gallery_03.jpg  |  Square/gallery image - product or portfolio | size: 517x519, ratio: 1.00, bytes: 100974, transparent: False
imgi_19_445089_7dbbf909f14c4e4c9b6dba57b7c91a62~mv2.png  ->  clientes/logos/logo_01.png  |  Logo / icon (suggested for partners/clients or header) | size: 465x531, ratio: 0.88, bytes: 511018, transparent: True
imgi_12_445089_233f3e1cd4cb4af48ea20965342e0669~mv2.jpg  ->  sobre-nos/equipe/team_01.jpg  |  Portrait/team photo or product close-up - suggested for About/Team section | size: 381x522, ratio: 0.73, bytes: 37278, transparent: False
imgi_10_445089_c52125e77e884bb796039fd17508bb1c~mv2.jpg  ->  sobre-nos/equipe/team_02.jpg  |  Portrait/team photo or product close-up - suggested for About/Team section | size: 381x522, ratio: 0.73, bytes: 41801, transparent: False
imgi_11_445089_10e9d43b43a64dc19ec3cccc5084d48c~mv2.jpg  ->  sobre-nos/equipe/team_03.jpg  |  Portrait/team photo or product close-up - suggested for About/Team section | size: 381x522, ratio: 0.73, bytes: 38045, transparent: False
imgi_59_445089_1508661c984c466c8e08a73556425346~mv2.webp  ->  clientes/logos/logo_02.webp  |  Logo / icon (suggested for partners/clients or header) | size: 440x440, ratio: 1.00, bytes: 8738, transparent: False
imgi_58_445089_1508661c984c466c8e08a73556425346~mv2.jpg  ->  galeria/quadrados/gallery_04.jpg  |  Square/gallery image - product or portfolio | size: 440x440, ratio: 1.00, bytes: 23524, transparent: False
imgi_55_445089_ed1685f3e5ae4e63af33324728c35fa5~mv2.webp  ->  clientes/logos/logo_03.webp  |  Logo / icon (suggested for partners/clients or header) | size: 420x420, ratio: 1.00, bytes: 6832, transparent: False
imgi_54_445089_ed1685f3e5ae4e63af33324728c35fa5~mv2.jpg  ->  galeria/quadrados/gallery_05.jpg  |  Square/gallery image - product or portfolio | size: 420x420, ratio: 1.00, bytes: 21241, transparent: False
imgi_103_445089_57c00520ad514fe293006faf69c599cc~mv2.jpg  ->  galeria/quadrados/gallery_06.jpg  |  Square/gallery image - product or portfolio | size: 381x420, ratio: 0.91, bytes: 45226, transparent: False
imgi_104_445089_08d2219af3db40a1ae338d157702c78e~mv2.jpg  ->  clientes/logos/logo_04.jpg  |  Logo / icon (suggested for partners/clients or header) | size: 381x369, ratio: 1.03, bytes: 30993, transparent: False
imgi_105_445089_32038509c7154c98a6712c67bba65568~mv2.jpg  ->  clientes/logos/logo_05.jpg  |  Logo / icon (suggested for partners/clients or header) | size: 381x369, ratio: 1.03, bytes: 30647, transparent: False
imgi_18_445089_0566436e22da45eb909edf357070119e~mv2.jpg  ->  clientes/logos/logo_06.jpg  |  Logo / icon (suggested for partners/clients or header) | size: 381x369, ratio: 1.03, bytes: 36096, transparent: False
imgi_17_445089_73641ab5a1224bc492034ec52f76a910~mv2.jpg  ->  clientes/logos/logo_07.jpg  |  Logo / icon (suggested for partners/clients or header) | size: 381x369, ratio: 1.03, bytes: 25072, transparent: False
imgi_26_445089_255e41f2f0ec43d8bcd1d73849385114~mv2.jpg  ->  clientes/logos/logo_08.jpg  |  Logo / icon (suggested for partners/clients or header) | size: 381x359, ratio: 1.06, bytes: 30361, transparent: False
imgi_27_445089_4ed1deb8b74b48db92c37579423c4741~mv2.jpg  ->  clientes/logos/logo_09.jpg  |  Logo / icon (suggested for partners/clients or header) | size: 381x359, ratio: 1.06, bytes: 33077, transparent: False
imgi_15_445089_22729e3286354f61b7f50f49fb51c189~mv2.jpg  ->  clientes/logos/logo_10.jpg  |  Logo / icon (suggested for partners/clients or header) | size: 381x359, ratio: 1.06, bytes: 18944, transparent: False
imgi_14_445089_0f3577cd2d6d4b2a98b0252ae5b50fba~mv2.jpg  ->  clientes/logos/logo_11.jpg  |  Logo / icon (suggested for partners/clients or header) | size: 381x359, ratio: 1.06, bytes: 27480, transparent: False
imgi_16_445089_eae301ae2cad406b8a7eb5db85d26491~mv2.jpg  ->  clientes/logos/logo_12.jpg  |  Logo / icon (suggested for partners/clients or header) | size: 381x359, ratio: 1.06, bytes: 39833, transparent: False
imgi_24_445089_13a6f7d61df04afe93594beb4461e137~mv2.jpg  ->  clientes/logos/logo_13.jpg  |  Logo / icon (suggested for partners/clients or header) | size: 381x359, ratio: 1.06, bytes: 38156, transparent: False
imgi_25_445089_c41176fa46f846eb8a2e20ad4032e466~mv2.jpg  ->  clientes/logos/logo_14.jpg  |  Logo / icon (suggested for partners/clients or header) | size: 381x359, ratio: 1.06, bytes: 55624, transparent: False
imgi_13_11062b_6e3f6cb853b346d3988a976cd723ce23~mv2.jpg  ->  clientes/logos/logo_15.jpg  |  Logo / icon (suggested for partners/clients or header) | size: 381x359, ratio: 1.06, bytes: 57538, transparent: False
imgi_20_445089_71fe3afe3ced4676b09aecb04458ebaa~mv2.jpg  ->  sobre-nos/equipe/team_04.jpg  |  Portrait/team photo or product close-up - suggested for About/Team section | size: 305x434, ratio: 0.70, bytes: 24177, transparent: False
imgi_52_445089_c05e5138b43c4f03a48735622f0540c0~mv2.jpg  ->  clientes/logos/logo_16.jpg  |  Logo / icon (suggested for partners/clients or header) | size: 292x292, ratio: 1.00, bytes: 18816, transparent: False
imgi_51_445089_ed1685f3e5ae4e63af33324728c35fa5~mv2.jpg  ->  clientes/logos/logo_17.jpg  |  Logo / icon (suggested for partners/clients or header) | size: 292x292, ratio: 1.00, bytes: 13854, transparent: False
imgi_53_445089_1508661c984c466c8e08a73556425346~mv2.jpg  ->  clientes/logos/logo_18.jpg  |  Logo / icon (suggested for partners/clients or header) | size: 292x292, ratio: 1.00, bytes: 13957, transparent: False
imgi_47_445089_1508661c984c466c8e08a73556425346~mv2.webp  ->  clientes/logos/logo_19.webp  |  Logo / icon (suggested for partners/clients or header) | size: 292x292, ratio: 1.00, bytes: 5600, transparent: False
imgi_45_445089_ed1685f3e5ae4e63af33324728c35fa5~mv2.webp  ->  clientes/logos/logo_20.webp  |  Logo / icon (suggested for partners/clients or header) | size: 292x292, ratio: 1.00, bytes: 4980, transparent: False
imgi_46_445089_c05e5138b43c4f03a48735622f0540c0~mv2.webp  ->  clientes/logos/logo_21.webp  |  Logo / icon (suggested for partners/clients or header) | size: 292x292, ratio: 1.00, bytes: 8302, transparent: False
imgi_34_445089_7167fad392be498ab3beef610459a647~mv2.jpg  ->  clientes/logos/logo_22.jpg  |  Logo / icon (suggested for partners/clients or header) | size: 189x189, ratio: 1.00, bytes: 11555, transparent: False
imgi_31_445089_409fee478a8d445a90bb39ccb2b6e332~mv2.jpg  ->  clientes/logos/logo_23.jpg  |  Logo / icon (suggested for partners/clients or header) | size: 189x189, ratio: 1.00, bytes: 7171, transparent: False
imgi_33_445089_e75e8753644f49a889eab14b9d26457a~mv2.jpg  ->  clientes/logos/logo_24.jpg  |  Logo / icon (suggested for partners/clients or header) | size: 189x189, ratio: 1.00, bytes: 4961, transparent: False
imgi_32_445089_4dc785f578b04dccbb2594988442cb8c~mv2.jpg  ->  clientes/logos/logo_25.jpg  |  Logo / icon (suggested for partners/clients or header) | size: 189x189, ratio: 1.00, bytes: 6404, transparent: False
imgi_30_445089_2a6f18f3fc2a42bf9504f86997c3112a~mv2.jpg  ->  clientes/logos/logo_26.jpg  |  Logo / icon (suggested for partners/clients or header) | size: 189x189, ratio: 1.00, bytes: 5271, transparent: False
imgi_29_445089_e9e411d30e8447ed99c5cb3c703cbada~mv2.jpg  ->  clientes/logos/logo_27.jpg  |  Logo / icon (suggested for partners/clients or header) | size: 189x189, ratio: 1.00, bytes: 6638, transparent: False
imgi_28_445089_5daad0f0af7642339a0097346c1ac511~mv2.jpg  ->  clientes/logos/logo_28.jpg  |  Logo / icon (suggested for partners/clients or header) | size: 189x189, ratio: 1.00, bytes: 5279, transparent: False
imgi_2_Logo 2024.png  ->  home/hero/hero_02.png  |  Hero / showcase image | size: 336x89, ratio: 3.78, bytes: 40306, transparent: True
imgi_43_445089_e75e8753644f49a889eab14b9d26457a~mv2.jpg  ->  clientes/logos/logo_29.jpg  |  Logo / icon (suggested for partners/clients or header) | size: 106x107, ratio: 0.99, bytes: 1633, transparent: False
imgi_44_445089_7167fad392be498ab3beef610459a647~mv2.jpg  ->  clientes/logos/logo_30.jpg  |  Logo / icon (suggested for partners/clients or header) | size: 106x107, ratio: 0.99, bytes: 2912, transparent: False
imgi_42_445089_4dc785f578b04dccbb2594988442cb8c~mv2.jpg  ->  clientes/logos/logo_31.jpg  |  Logo / icon (suggested for partners/clients or header) | size: 106x107, ratio: 0.99, bytes: 2186, transparent: False
imgi_41_445089_409fee478a8d445a90bb39ccb2b6e332~mv2.jpg  ->  clientes/logos/logo_32.jpg  |  Logo / icon (suggested for partners/clients or header) | size: 106x107, ratio: 0.99, bytes: 2583, transparent: False
imgi_40_445089_2a6f18f3fc2a42bf9504f86997c3112a~mv2.jpg  ->  clientes/logos/logo_33.jpg  |  Logo / icon (suggested for partners/clients or header) | size: 106x107, ratio: 0.99, bytes: 1672, transparent: False
imgi_39_445089_e9e411d30e8447ed99c5cb3c703cbada~mv2.jpg  ->  clientes/logos/logo_34.jpg  |  Logo / icon (suggested for partners/clients or header) | size: 106x107, ratio: 0.99, bytes: 2127, transparent: False
imgi_38_445089_5daad0f0af7642339a0097346c1ac511~mv2.jpg  ->  clientes/logos/logo_35.jpg  |  Logo / icon (suggested for partners/clients or header) | size: 106x107, ratio: 0.99, bytes: 2040, transparent: False
imgi_36_445089_972865d714474f7ab7302ab66d2f0a29~mv2.jpg  ->  clientes/logos/logo_36.jpg  |  Logo / icon (suggested for partners/clients or header) | size: 106x107, ratio: 0.99, bytes: 1928, transparent: False
imgi_35_445089_39bc848d7fe4447d9969660ea5ce16b2~mv2.jpg  ->  clientes/logos/logo_37.jpg  |  Logo / icon (suggested for partners/clients or header) | size: 106x107, ratio: 0.99, bytes: 1484, transparent: False
imgi_7_445089_bfc98237c3dc4c52a3d50656887b067f~mv2.png  ->  home/hero/hero_03.png  |  Hero / showcase image | size: 134x61, ratio: 2.20, bytes: 17900, transparent: True
imgi_106_default.png  ->  servicos/landscape/serv_02.png  |  Landscape photo - good for service examples or portfolio | size: 100x70, ratio: 1.43, bytes: 4879, transparent: True
imgi_37_445089_a2e10ed5d1454ed59433ec8974f94257~mv2.png  ->  clientes/logos/logo_38.png  |  Logo / icon (suggested for partners/clients or header) | size: 49x49, ratio: 1.00, bytes: 6547, transparent: True
imgi_3_445089_cc281e3aa64e4615a017cf7027e80127~mv2.png  ->  clientes/logos/logo_39.png  |  Logo / icon (suggested for partners/clients or header) | size: 49x49, ratio: 1.00, bytes: 5063, transparent: True
imgi_4_e316f544f9094143b9eac01f1f19e697.png  ->  clientes/logos/logo_40.png  |  Logo / icon (suggested for partners/clients or header) | size: 45x45, ratio: 1.00, bytes: 2750, transparent: True
imgi_6_8d6893330740455c96d218258a458aa4.png  ->  clientes/logos/logo_41.png  |  Logo / icon (suggested for partners/clients or header) | size: 45x45, ratio: 1.00, bytes: 4030, transparent: True
imgi_5_a1b09fe8b7f04378a9fe076748ad4a6a.png  ->  clientes/logos/logo_42.png  |  Logo / icon (suggested for partners/clients or header) | size: 45x45, ratio: 1.00, bytes: 3403, transparent: True
imgi_50_8d6893330740455c96d218258a458aa4.png  ->  clientes/logos/logo_43.png  |  Logo / icon (suggested for partners/clients or header) | size: 39x39, ratio: 1.00, bytes: 3081, transparent: True
imgi_49_a1b09fe8b7f04378a9fe076748ad4a6a.png  ->  clientes/logos/logo_44.png  |  Logo / icon (suggested for partners/clients or header) | size: 39x39, ratio: 1.00, bytes: 2375, transparent: True
imgi_48_e316f544f9094143b9eac01f1f19e697.png  ->  clientes/logos/logo_45.png  |  Logo / icon (suggested for partners/clients or header) | size: 39x39, ratio: 1.00, bytes: 2381, transparent: True
