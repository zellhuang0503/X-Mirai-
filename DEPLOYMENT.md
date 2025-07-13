# X-Mirai 未來島 - 部署指南

本指南將協助您將網站部署到 GitHub Pages。

## 📋 部署前檢查清單

### 1. 檔案準備
- ✅ `index.html` - 主頁面
- ✅ `style.css` - 樣式表
- ✅ `script.js` - JavaScript 功能
- ✅ `sitemap.xml` - 網站地圖
- ✅ `robots.txt` - 搜尋引擎指引
- ✅ `README.md` - 專案說明
- ✅ `.gitignore` - Git 忽略檔案
- ✅ `assets/` 資料夾 - 媒體檔案

### 2. 媒體檔案檢查
- 確認 `assets/openart-image_rHMC1ZkR_1752389710507_raw.jpg` 存在
- 確認 `assets/openart-video_67a2b4c4_1752391878013.mp4` 存在
- 建議壓縮影片檔案以提升載入速度

## 🚀 GitHub Pages 部署步驟

### 步驟 1: 建立 GitHub Repository

1. 登入 [GitHub](https://github.com)
2. 點擊右上角的 "+" 按鈕，選擇 "New repository"
3. 填寫 Repository 資訊：
   - **Repository name**: `Test_Site` (或您喜歡的名稱)
   - **Description**: "X-Mirai 未來島 - 為壯世代打造的慢活旅讀新體驗"
   - **Visibility**: 選擇 "Public"
   - **不要勾選** "Add a README file" (我們已經有了)
4. 點擊 "Create repository"

### 步驟 2: 上傳檔案到 GitHub

#### 方法 A: 使用 Git 命令列 (推薦)

1. 開啟命令提示字元或 PowerShell
2. 導航到專案資料夾：
   ```bash
   cd E:\TraeProjects\Test_Site
   ```

3. 初始化 Git repository：
   ```bash
   git init
   ```

4. 添加所有檔案：
   ```bash
   git add .
   ```

5. 提交變更：
   ```bash
   git commit -m "Initial commit: X-Mirai 未來島網站"
   ```

6. 添加遠端 repository (替換 `yourusername` 為您的 GitHub 用戶名)：
   ```bash
   git remote add origin https://github.com/yourusername/Test_Site.git
   ```

7. 推送到 GitHub：
   ```bash
   git branch -M main
   git push -u origin main
   ```

#### 方法 B: 使用 GitHub 網頁介面

1. 在新建的 repository 頁面，點擊 "uploading an existing file"
2. 拖拽所有檔案到上傳區域
3. 在 "Commit changes" 區域輸入提交訊息
4. 點擊 "Commit changes"

### 步驟 3: 啟用 GitHub Pages

1. 在 GitHub repository 頁面，點擊 "Settings" 標籤
2. 在左側選單中找到 "Pages"
3. 在 "Source" 部分：
   - 選擇 "Deploy from a branch"
   - Branch: 選擇 "main"
   - Folder: 選擇 "/ (root)"
4. 點擊 "Save"
5. 等待幾分鐘，GitHub 會顯示網站 URL

### 步驟 4: 更新網站 URL

部署完成後，您需要更新檔案中的 URL 參考：

1. **更新 `index.html`**：
   - 將所有 `https://yourusername.github.io/Test_Site/` 替換為實際 URL
   - 更新 Open Graph 和 Twitter 標籤中的 URL

2. **更新 `sitemap.xml`**：
   - 將所有 URL 更新為實際的網站地址

3. **更新 `robots.txt`**：
   - 更新 Sitemap URL

4. **更新 `README.md`**：
   - 更新專案 URL 和聯絡資訊

## 🔧 部署後優化

### 1. 設定自訂網域 (可選)

如果您有自己的網域：

1. 在 GitHub Pages 設定中，在 "Custom domain" 欄位輸入您的網域
2. 在您的網域 DNS 設定中添加 CNAME 記錄指向 `yourusername.github.io`
3. 等待 DNS 傳播完成

### 2. 啟用 HTTPS

1. 在 GitHub Pages 設定中勾選 "Enforce HTTPS"
2. 這會自動為您的網站提供 SSL 憑證

### 3. 設定 Google Analytics (可選)

1. 註冊 [Google Analytics](https://analytics.google.com)
2. 建立新的 Property
3. 取得追蹤 ID (格式: GA_TRACKING_ID)
4. 在 `index.html` 中取消註解 Google Analytics 程式碼
5. 將 `GA_TRACKING_ID` 替換為實際的追蹤 ID

## 📊 效能監控

### 建議使用的工具：

1. **Google PageSpeed Insights**
   - URL: https://pagespeed.web.dev/
   - 分析網站載入速度和效能

2. **GTmetrix**
   - URL: https://gtmetrix.com/
   - 詳細的效能分析報告

3. **Google Search Console**
   - URL: https://search.google.com/search-console
   - 監控 SEO 表現和搜尋排名

## 🔄 更新網站

當您需要更新網站內容時：

1. 修改本地檔案
2. 提交變更：
   ```bash
   git add .
   git commit -m "更新描述"
   git push
   ```
3. GitHub Pages 會自動重新部署

## ❗ 常見問題

### Q: 網站顯示 404 錯誤
**A**: 檢查 repository 是否為 Public，並確認 GitHub Pages 已正確啟用。

### Q: 影片無法播放
**A**: 確認影片檔案已正確上傳，並檢查檔案路徑是否正確。

### Q: 樣式沒有載入
**A**: 檢查 `style.css` 檔案路徑，確認檔案在 repository 根目錄。

### Q: 網站載入很慢
**A**: 考慮壓縮圖片和影片檔案，或使用 CDN 服務。

## 📞 技術支援

如果遇到部署問題，可以：

1. 檢查 GitHub Pages 的[官方文件](https://docs.github.com/en/pages)
2. 查看 repository 的 Actions 標籤頁面，檢查部署狀態
3. 確認所有檔案路徑使用相對路徑

---

🎉 **恭喜！您的 X-Mirai 未來島網站即將上線！**

部署完成後，您的網站將可以通過以下 URL 訪問：
`https://yourusername.github.io/Test_Site/`

記得將 `yourusername` 替換為您的實際 GitHub 用戶名。