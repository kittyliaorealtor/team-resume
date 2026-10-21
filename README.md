# MARS Team Resume

A printable team resume. You add the deals. Everyone else opens the link, sees the latest version, and clicks **Save PDF** to print it.

This is its own project. It doesn't share anything with the CMA Builder.

## What's in this folder

- `index.html`: the resume page
- `resume-data.json`: the team's deals. The page reads this file, and you replace it whenever you update the resume.
- `logo.png`: the team logo
- `lib/`: the tools that build the PDF and read CSV files (don't change these)

The `resume-data.json` included here holds **example deals** so you can see the layout. Remove them before sharing the link (see "Your first update" below).

## Put it online (GitHub Pages, free)

1. On github.com, click **+ → New repository**. Name it `mars-resume`, set it to **Public**, and click **Create repository**.
2. Click **uploading an existing file**. Drag in everything inside this folder (not the folder itself), including the `lib` folder. Click **Commit changes**.
3. Go to **Settings → Pages**. Set Source to **Deploy from a branch**, Branch to **main**, folder to **/ (root)**, and click **Save**.
4. After a minute or two, refresh. Your address appears, usually `https://YOUR-USERNAME.github.io/mars-resume/`.

## Two links

- **Team link** (send this to everyone): `https://YOUR-USERNAME.github.io/mars-resume/`
  The resume and a Save PDF button. No editing controls.
- **Your editing link** (bookmark it, don't share it): `https://YOUR-USERNAME.github.io/mars-resume/#edit`
  The same page plus an **Add or edit deals** button.

Anyone who learns the editing link can make edits on their own computer, but nobody can change what the team sees without access to your GitHub account.

## Updating the resume

1. Open your editing link and click **Add or edit deals**.
2. Add a new deal, or change a status (Active → Under contract → Sold) and the price and date.
3. Upload photos for active listings and recent deals. Active listings always show a photo. Under contract and Sold show photos for the 3 most recent.
4. Each home is placed on the map automatically after you type the address and town. Look for "On the map" under each deal.
5. Click **Download data file**. This saves `resume-data.json` to your computer.
6. On GitHub, open the repository, click **Add file → Upload files**, drag in the new `resume-data.json`, and click **Commit changes**. It replaces the old one.
7. Within a few minutes, everyone's link shows the update.

## Your first update

1. Open your editing link, click **Add or edit deals**, then click **Remove examples**.
2. To add past deals in bulk, use **Choose CSV file** with a spreadsheet that has columns such as Address, Town, Zip, Status, Price, Date, Side and Agent. Then click **Put homes on the map**. It places about one home per second.
3. Download the data file and upload it to GitHub as in steps 5 and 6.

## Good to know

- Your edits are saved on your own computer until you upload the data file. If you switch computers before uploading, those edits won't be there.
- To keep the file small, photos are kept only for the 6 most recent sales, since older sales appear in the table without photos.
- Map locations come from OpenStreetMap's free address search. If an address can't be found, the home is placed at its town instead ("town only"), or you'll see "Not found" so you can fix the address.
