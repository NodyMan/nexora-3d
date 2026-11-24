"""Merge the Onest subsets from @fontsource (latin, latin-ext, cyrillic,
cyrillic-ext) into one .woff per weight for the 3D text renderer, which
takes a single font file. Run from the nexora-3d folder:
    python tools/merge_fonts.py
"""
import os
from fontTools.merge import Merger
from fontTools.ttLib import TTFont

SRC = os.path.join('tools', 'deps', 'node_modules', '@fontsource', 'onest', 'files')
OUT = os.path.join('site', 'assets', 'fonts')
SUBSETS = ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext']
os.makedirs(OUT, exist_ok=True)

for weight in (400, 600):
    tmp = []
    for sub in SUBSETS:
        font = TTFont(os.path.join(SRC, f'onest-{sub}-{weight}-normal.woff'))
        font.flavor = None
        path = os.path.join(OUT, f'_tmp-{sub}-{weight}.ttf')
        font.save(path)
        tmp.append(path)
    merged = Merger().merge(tmp)
    merged.flavor = 'woff'
    target = os.path.join(OUT, f'onest-{weight}.woff')
    merged.save(target)
    for path in tmp:
        os.remove(path)
    cmap = merged.getBestCmap()
    print(target, os.path.getsize(target), 'glyphs', len(cmap),
          'cyrillic', 0x0416 in cmap, 'uz-okina', 0x02BB in cmap, 'o-turned', 0x2018 in cmap)
